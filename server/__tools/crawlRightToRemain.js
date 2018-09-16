const request = require('request-promise')
const cheerio = require('cheerio')
const path = require('path')
const dir = path.join(__dirname, '../seeds/data')
const fs = require('fs')

const homePage = 'https://www.righttoremain.org.uk/toolkit/index.html'

const scrapLinks = (data) => {
  const $ = cheerio.load(data, {
    normalizeWhitespace: true
  })
  return $('.accordion-content').find('div.row').find('.medium-3.columns').find('a')
    .map(function (i, el) {
      return `https://www.righttoremain.org.uk/toolkit/${$(this).attr('href')}`
    }).toArray()
}
const getLinkPromises = (links) => {
  return links.map((link) => { return request(link) })
}
const scrapContent = (htmlPage) => {
  const $ = cheerio.load(htmlPage, { normalizeWhitespace: true })
  const fullContent = $('.callout').text()
  const shortContent = fullContent.substring(0, 50)
  const title = $('title').text().replace('Right to Remain Toolkit:', '')
  return { title, short_content: shortContent, full_content: fullContent, category_id: 1, status: 'approved' }
}

function wrtieToFile (json) {
  const contentsJSON = JSON.stringify(json, null, 4)
  fs.writeFile(dir + '/rightToRemain.json', contentsJSON, (err) => {
    if (err) throw err
    console.log('SAVED')
  })
}
const start = async () => {
  const homepage = await request(homePage)
  const links = scrapLinks(homepage)
  const allPages = await Promise.all(getLinkPromises(links))
  const content = allPages.map(scrapContent)
  wrtieToFile(content)
}
start()

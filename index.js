// Find Github API endpoint for star count

const axios = require('axios');
const puppeteer = require('puppeteer')
const generateHTML = require('./generateHTML')
const inquirer = require("inquirer");

const getUserProfileData = async (username) => {
  const userResponse = await axios.get(`https://api.github.com/users/${username}`)

  //When api end point is found remove the | {data: {data}} | part and use the async axios call
  const userStarsResponse = { data: {} } // get the axios call for stars
  const userWithStarsCount = Object.assign(userResponse.data, userStarsResponse.data)

  // Make sure that the stars count value equals what generateHTML.js is looking for
  return userWithStarsCount
};

const createPDF = async html => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setContent(html);

  await page.emulateMediaType('screen')
  await page.pdf({
    path: './testpdf.pdf',
    format: 'A4',
    printBackground: true
  })
  console.log('done')
  await browser.close()
  process.exit()
}

const promptUser = async function () {
  const { username } = await inquirer.prompt({
    message: "what is your github name?",
    name: "username"
  })

  const { color } = await inquirer.prompt({
    message: "whats your favorite color?",
    name: "color"
  })

  const input = {
    username: username,
    color: color
  }
  return input
}

async function init() {
  const answeredQuestions = await promptUser()
  const userData = await getUserProfileData(answeredQuestions.username)
  const userInputDataAndUserData = Object.assign(answeredQuestions, userData);
  const html = await generateHTML(userInputDataAndUserData);
  createPDF(html);
}

init()
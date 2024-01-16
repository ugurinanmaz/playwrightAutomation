const { test, expect } = require('@playwright/test')

test('Home Page', async ({page})=>{


    await page.goto('https://demoblaze.com/');

    const pageTitle = page.title();
    console.log('Page Title is:', pageTitle); //check point

    const pageURL = page.url();
    console.log('Page URL is:', pageURL); //check point

    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/');

    await page.close();

} )


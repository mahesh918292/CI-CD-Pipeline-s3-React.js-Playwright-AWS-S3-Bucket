import { test,expect } from '@playwright/test';
test.describe('Testing', () => {
  test('Test React.js Application',async({page})=>{
    await page.goto('http://localhost:5173/')
    const element=await page.locator('.counter-button')
    for(let i=0; i<5; i++)
    {
      await element.click()
      const value=await page.locator('.counter-value').textContent()
      await expect(value).toBe((i+1).toString())
    }
  })
});

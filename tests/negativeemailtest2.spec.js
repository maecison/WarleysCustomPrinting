import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://maecison.github.io/WarleysCustomPrinting/');
  await page.getByLabel('First Name:').click();
  await page.getByLabel('First Name:').fill('Mae');
  await page.getByLabel('First Name:').press('Tab');
  await page.getByLabel('Last Name:').fill('Ison');
  await page.getByLabel('Last Name:').press('Tab');
  await page.getByLabel('Email Address:').fill('maeisonemail.com');
  await page.getByLabel('Email Address:').press('Tab');
  await page.getByLabel('Phone Number:').fill('4030000000');
  await page.getByLabel('Phone Number:').press('Tab');
  await page.getByLabel('Message:').fill('Message');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByLabel('Email Address:')).toBeVisible();
  await expect(page.getByRole('button')).toContainText('Submit');
  await page.getByLabel('Email Address:').click();
  await page.getByLabel('Email Address:').dblclick();
});
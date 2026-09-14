# The Pearl Project – Pizza Order Calculator

Simple web calculator for ordering pizzas for events.

## Files

| File            | Purpose                                      |
|-----------------|----------------------------------------------|
| `index.html`    | The calculator page (usually leave this alone) |
| `config.js`     | **Edit this file** to change defaults & stores |
| `logo.png`      | Pearl Project logo                           |
| `favicon.png`   | Pizza-slice browser tab icon                 |

## How to change defaults or store list

1. Open **`config.js`** in any text editor (Notepad, TextEdit, VS Code, etc.).
2. Change the numbers under `defaults`.
3. Add, remove, or edit stores in the `stores` list.
4. Save the file and refresh the webpage (or re-upload to GitHub Pages).

### Example – changing a store phone number

```js
{
  name: "Papa John's - Inverness",
  address: "123 Main Street, Inverness, FL 34450",
  phone: "352-555-0199"   // ← just change this
}
```

### Adding a new store

Copy one of the existing store blocks and paste it at the end of the list (before the closing `]`).  
Remember the commas between stores.

## Hosting on GitHub Pages

1. Create a public repository.
2. Upload all four files (`index.html`, `config.js`, `logo.png`, `favicon.png`).
3. Go to **Settings → Pages** → Source = Deploy from branch → `main` / root.
4. Your live link will be: `https://YOUR-USERNAME.github.io/REPO-NAME/`

Anyone with the link can use the calculator. Phone numbers are tappable on mobile.

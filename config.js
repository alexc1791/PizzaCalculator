// ============================================================
//  PIZZA CALCULATOR - DEFAULTS & STORE LIST
//  Edit this file to change defaults.
// ============================================================

const CONFIG = {

  // ----- Default numbers that appear when the page loads -----
  defaults: {
    adults: 34,                 // Adults & Teens
    kids: 16,                   // Kids
    kidSlices: 1.75,            // Slices per kid (slider default)
    slicesPerPizza: 8,          // Slices in a large (14") Papa John's pizza
    cheesePercent: 60,          // % that should be plain cheese
    costPerRegular: 9.00,       // Educational / 501c3 discounted price
    gfCount: 0,                 // Number of gluten-free pizzas
    costPerGF: 14.95            // Regular (non-discounted) price for GF
  },

  // ----- Store locations (add or remove as many as you like) -----
  // Each store needs: name, address, phone
  // Phone will become a clickable "call" link on phones
  // Listed in order of frequency used
  stores: [
    {
      name: "Papa John's - College Rd",
      address: "2611 SW College Rd, Ocala, FL",
      phone: "(352) 291-1010"
    },
    {
      name: "Papa John's - Silver Springs Blvd",
      address: "2705 NE Silver Springs Blvd, Ocala, FL",
      phone: "(352) 690-2277"
    },
    {
      name: "Papa John's - US Hwy 441",
      address: "9470 South US Highway 441, Ocala, FL",
      phone: "(352) 307-3222"
    },
    {
      name: "Papa John's - Hwy 200",
      address: "8585 SW Hwy 200, Ocala, FL",
      phone: "(352) 622-6272"
    }
  ]

};

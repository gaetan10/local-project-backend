const express = require('express')

const { v4: uuidv4 } = require('uuid');

const uniqueUserId = uuidv4();


const FARMERS_DATA = [
  {
    id: '1',
    name: "Alice Damarey",
    picture: "https://png.pngtree.com/background/20230425/original/pngtree-two-women-working-on-a-vegetable-farm-picture-image_2469276.jpg",
    address: "5210 rue saint Denis",
    city: "MONTREAL",
    mainProducts: "Carottes, champignons, courgettes.",
    description: "Alice Damarey is a dedicated farmer with a passion for organic produce. She runs a small farm in Montreal, where she cultivates a variety of vegetables using sustainable farming practices. Alice takes pride in providing fresh, healthy produce to her local community.",
    products: [
      { productName: "Eggs x6", productPrice: "3", productImage: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Fresh Milk", productPrice: "2", productImage: "https://images.unsplash.com/photo-1634141510639-d691d86f47be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1pbGt8ZW58MHx8MHx8fDA%3D" },
      { productName: "Organic Apples", productPrice: "5", productImage: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGVzfGVufDB8fDB8fHww" },
      { productName: "Tomatoes", productPrice: "4", productImage: "https://images.unsplash.com/photo-1444731961956-751ed90465a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" },
      { productName: "Carrots", productPrice: "2", productImage: "https://images.unsplash.com/photo-1550411294-b3b1bd5fce1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D" },
      { productName: "Potatoes", productPrice: "3", productImage: "https://images.unsplash.com/photo-1573196444577-af471298e034?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Fresh Bread", productPrice: "4", productImage: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Broccoli", productPrice: "3", productImage: "https://images.unsplash.com/photo-1628773822990-202aed1e567e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyb2NvbGl8ZW58MHx8MHx8fDA%3D" },
      { productName: "Lettuce", productPrice: "2", productImage: "https://images.unsplash.com/photo-1516906561371-53f48df1254d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxldHR1Y2UlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D" },
      { productName: "Cucumbers", productPrice: "2", productImage: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1Y3VtYmVyfGVufDB8fDB8fHww" },
      { productName: "Bell Peppers", productPrice: "4", productImage: "https://images.unsplash.com/photo-1567539549213-cc1697632146?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Strawberries", productPrice: "5", productImage: "https://images.unsplash.com/photo-1694449070731-5c04f538b00b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RyYWJlcnJ5fGVufDB8fDB8fHww" },
      { productName: "Spinach", productPrice: "3", productImage: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Cauliflower", productPrice: "3", productImage: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Zucchini", productPrice: "2", productImage: "https://images.unsplash.com/photo-1596056094719-10ba4f7ea650?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8enVjY2hpbml8ZW58MHx8MHx8fDA%3D" },
      { productName: "Onions", productPrice: "2", productImage: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ]
  },
  {
    id: '2',
    name: "Bob Johnson",
    picture: "https://fermedelaberceuse.com/media/images/robin_champs_choux.png",
    address: "1234 Main Street",
    city: "NEW YORK",
    mainProducts: "Tomatoes, peppers, lettuce.",
    description: "Bob Johnson is an experienced farmer known for his high-quality tomatoes, peppers, and lettuce. He manages a farm in New York City, where he implements innovative farming techniques to maximize crop yield and quality. Bob's dedication to sustainable agriculture has earned him recognition in the farming community.",
    products: [
      { productName: "Eggs x6", productPrice: "3", productImage: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Fresh Milk", productPrice: "2", productImage: "https://images.unsplash.com/photo-1634141510639-d691d86f47be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1pbGt8ZW58MHx8MHx8fDA%3D" },
      { productName: "Organic Apples", productPrice: "5", productImage: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGVzfGVufDB8fDB8fHww" },
      { productName: "Tomatoes", productPrice: "4", productImage: "https://images.unsplash.com/photo-1444731961956-751ed90465a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" },
      { productName: "Carrots", productPrice: "2", productImage: "https://images.unsplash.com/photo-1550411294-b3b1bd5fce1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D" },
      { productName: "Potatoes", productPrice: "3", productImage: "https://images.unsplash.com/photo-1573196444577-af471298e034?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Fresh Bread", productPrice: "4", productImage: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Broccoli", productPrice: "3", productImage: "https://images.unsplash.com/photo-1628773822990-202aed1e567e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyb2NvbGl8ZW58MHx8MHx8fDA%3D" },
      { productName: "Lettuce", productPrice: "2", productImage: "https://images.unsplash.com/photo-1516906561371-53f48df1254d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxldHR1Y2UlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D" },
      { productName: "Cucumbers", productPrice: "2", productImage: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1Y3VtYmVyfGVufDB8fDB8fHww" },
      { productName: "Bell Peppers", productPrice: "4", productImage: "https://images.unsplash.com/photo-1567539549213-cc1697632146?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Strawberries", productPrice: "5", productImage: "https://images.unsplash.com/photo-1694449070731-5c04f538b00b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RyYWJlcnJ5fGVufDB8fDB8fHww" },
      { productName: "Spinach", productPrice: "3", productImage: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Cauliflower", productPrice: "3", productImage: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Zucchini", productPrice: "2", productImage: "https://images.unsplash.com/photo-1596056094719-10ba4f7ea650?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8enVjY2hpbml8ZW58MHx8MHx8fDA%3D" },
      { productName: "Onions", productPrice: "2", productImage: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ]
  },
  {
    id: '3',
    name: "Ella Patel",
    picture: "https://www.lafermiere.com/wp-content/uploads/elementor/thumbs/202202-la-fermiere-orlanne-eric-christelle-21-scaled-pm6ut2r4ne81h4itsn9mtdv3xfo1vzk9mg11j0bd7k.jpg",
    address: "9876 Elm Avenue",
    city: "LOS ANGELES",
    mainProducts: "Apples, oranges, bananas.",
    description: "Ella Patel is a passionate farmer specializing in apples, oranges, and bananas. Her farm in Los Angeles is known for its diverse selection of fruit trees and impeccable fruit quality. Ella's commitment to organic farming practices ensures that her fruits are both delicious and nutritious.",
    products: [
      { productName: "Eggs x6", productPrice: "3", productImage: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Fresh Milk", productPrice: "2", productImage: "https://images.unsplash.com/photo-1634141510639-d691d86f47be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1pbGt8ZW58MHx8MHx8fDA%3D" },
      { productName: "Organic Apples", productPrice: "5", productImage: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGVzfGVufDB8fDB8fHww" },
      { productName: "Tomatoes", productPrice: "4", productImage: "https://images.unsplash.com/photo-1444731961956-751ed90465a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" },
      { productName: "Carrots", productPrice: "2", productImage: "https://images.unsplash.com/photo-1550411294-b3b1bd5fce1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D" },
      { productName: "Potatoes", productPrice: "3", productImage: "https://images.unsplash.com/photo-1573196444577-af471298e034?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Fresh Bread", productPrice: "4", productImage: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Broccoli", productPrice: "3", productImage: "https://images.unsplash.com/photo-1628773822990-202aed1e567e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyb2NvbGl8ZW58MHx8MHx8fDA%3D" },
      { productName: "Lettuce", productPrice: "2", productImage: "https://images.unsplash.com/photo-1516906561371-53f48df1254d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxldHR1Y2UlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D" },
      { productName: "Cucumbers", productPrice: "2", productImage: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1Y3VtYmVyfGVufDB8fDB8fHww" },
      { productName: "Bell Peppers", productPrice: "4", productImage: "https://images.unsplash.com/photo-1567539549213-cc1697632146?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Strawberries", productPrice: "5", productImage: "https://images.unsplash.com/photo-1694449070731-5c04f538b00b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RyYWJlcnJ5fGVufDB8fDB8fHww" },
      { productName: "Spinach", productPrice: "3", productImage: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Cauliflower", productPrice: "3", productImage: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Zucchini", productPrice: "2", productImage: "https://images.unsplash.com/photo-1596056094719-10ba4f7ea650?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8enVjY2hpbml8ZW58MHx8MHx8fDA%3D" },
      { productName: "Onions", productPrice: "2", productImage: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ]
  },
  {
    id: '4',
    name: "David Smith",
    picture: "https://i.ytimg.com/vi/TGk1dWscMsg/maxresdefault.jpg",
    address: "2468 Oak Lane",
    city: "CHICAGO",
    mainProducts: "Potatoes, onions, garlic.",
    description: "David Smith is a seasoned farmer specializing in potatoes, onions, and garlic. His farm in Chicago is known for its hearty root vegetables and aromatic herbs. David's dedication to sustainable farming methods ensures that his produce is both flavorful and environmentally friendly.",
    products: [
      { productName: "Eggs x6", productPrice: "3", productImage: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Fresh Milk", productPrice: "2", productImage: "https://images.unsplash.com/photo-1634141510639-d691d86f47be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1pbGt8ZW58MHx8MHx8fDA%3D" },
      { productName: "Organic Apples", productPrice: "5", productImage: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGVzfGVufDB8fDB8fHww" },
      { productName: "Tomatoes", productPrice: "4", productImage: "https://images.unsplash.com/photo-1444731961956-751ed90465a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" },
      { productName: "Carrots", productPrice: "2", productImage: "https://images.unsplash.com/photo-1550411294-b3b1bd5fce1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D" },
      { productName: "Potatoes", productPrice: "3", productImage: "https://images.unsplash.com/photo-1573196444577-af471298e034?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Fresh Bread", productPrice: "4", productImage: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Broccoli", productPrice: "3", productImage: "https://images.unsplash.com/photo-1628773822990-202aed1e567e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyb2NvbGl8ZW58MHx8MHx8fDA%3D" },
      { productName: "Lettuce", productPrice: "2", productImage: "https://images.unsplash.com/photo-1516906561371-53f48df1254d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxldHR1Y2UlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D" },
      { productName: "Cucumbers", productPrice: "2", productImage: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1Y3VtYmVyfGVufDB8fDB8fHww" },
      { productName: "Bell Peppers", productPrice: "4", productImage: "https://images.unsplash.com/photo-1567539549213-cc1697632146?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Strawberries", productPrice: "5", productImage: "https://images.unsplash.com/photo-1694449070731-5c04f538b00b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RyYWJlcnJ5fGVufDB8fDB8fHww" },
      { productName: "Spinach", productPrice: "3", productImage: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Cauliflower", productPrice: "3", productImage: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Zucchini", productPrice: "2", productImage: "https://images.unsplash.com/photo-1596056094719-10ba4f7ea650?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8enVjY2hpbml8ZW58MHx8MHx8fDA%3D" },
      { productName: "Onions", productPrice: "2", productImage: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ]
  },
  {
    id: '5',
    name: "Sophia Wang",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8rLaFS5bTIDIxSz4I-PzVxTl4y_oSBpK5w0wumJyMg&s",
    address: "1357 Pine Road",
    city: "SAN FRANCISCO",
    mainProducts: "Spinach, kale, broccoli.",
    description: "Sophia Wang is an innovative farmer specializing in leafy greens like spinach, kale, and broccoli. Her farm in San Francisco utilizes vertical farming techniques to maximize space and efficiency. Sophia's commitment to organic farming ensures that her produce is fresh, nutritious, and environmentally sustainable.",
    products: [
      { productName: "Eggs x6", productPrice: "3", productImage: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Fresh Milk", productPrice: "2", productImage: "https://images.unsplash.com/photo-1634141510639-d691d86f47be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1pbGt8ZW58MHx8MHx8fDA%3D" },
      { productName: "Organic Apples", productPrice: "5", productImage: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGVzfGVufDB8fDB8fHww" },
      { productName: "Tomatoes", productPrice: "4", productImage: "https://images.unsplash.com/photo-1444731961956-751ed90465a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" },
      { productName: "Carrots", productPrice: "2", productImage: "https://images.unsplash.com/photo-1550411294-b3b1bd5fce1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D" },
      { productName: "Potatoes", productPrice: "3", productImage: "https://images.unsplash.com/photo-1573196444577-af471298e034?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Fresh Bread", productPrice: "4", productImage: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Broccoli", productPrice: "3", productImage: "https://images.unsplash.com/photo-1628773822990-202aed1e567e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyb2NvbGl8ZW58MHx8MHx8fDA%3D" },
      { productName: "Lettuce", productPrice: "2", productImage: "https://images.unsplash.com/photo-1516906561371-53f48df1254d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxldHR1Y2UlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D" },
      { productName: "Cucumbers", productPrice: "2", productImage: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1Y3VtYmVyfGVufDB8fDB8fHww" },
      { productName: "Bell Peppers", productPrice: "4", productImage: "https://images.unsplash.com/photo-1567539549213-cc1697632146?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Strawberries", productPrice: "5", productImage: "https://images.unsplash.com/photo-1694449070731-5c04f538b00b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RyYWJlcnJ5fGVufDB8fDB8fHww" },
      { productName: "Spinach", productPrice: "3", productImage: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Cauliflower", productPrice: "3", productImage: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Zucchini", productPrice: "2", productImage: "https://images.unsplash.com/photo-1596056094719-10ba4f7ea650?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8enVjY2hpbml8ZW58MHx8MHx8fDA%3D" },
      { productName: "Onions", productPrice: "2", productImage: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ]
  },
  {
    id: '6',
    name: "Michael Brown",
    picture: "https://images.radio-canada.ca/v1/ici-info/16x9/covid-19-apres-la-crise-coronavirus-relocalisation-economie-delocalisation-agriculture-3.jpg",
    address: "3690 Cedar Street",
    city: "MIAMI",
    mainProducts: "Strawberries, blueberries, raspberries.",
    description: "Michael Brown is a dedicated farmer specializing in berries such as strawberries, blueberries, and raspberries. His farm in Miami is renowned for its sweet and juicy fruits, which are hand-picked at the peak of ripeness. Michael's passion for farming and commitment to quality ensure that his berries are always a favorite among locals.",
    products: [
      { productName: "Eggs x6", productPrice: "3", productImage: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Fresh Milk", productPrice: "2", productImage: "https://images.unsplash.com/photo-1634141510639-d691d86f47be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1pbGt8ZW58MHx8MHx8fDA%3D" },
      { productName: "Organic Apples", productPrice: "5", productImage: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGVzfGVufDB8fDB8fHww" },
      { productName: "Tomatoes", productPrice: "4", productImage: "https://images.unsplash.com/photo-1444731961956-751ed90465a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" },
      { productName: "Carrots", productPrice: "2", productImage: "https://images.unsplash.com/photo-1550411294-b3b1bd5fce1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D" },
      { productName: "Potatoes", productPrice: "3", productImage: "https://images.unsplash.com/photo-1573196444577-af471298e034?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Fresh Bread", productPrice: "4", productImage: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Broccoli", productPrice: "3", productImage: "https://images.unsplash.com/photo-1628773822990-202aed1e567e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyb2NvbGl8ZW58MHx8MHx8fDA%3D" },
      { productName: "Lettuce", productPrice: "2", productImage: "https://images.unsplash.com/photo-1516906561371-53f48df1254d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxldHR1Y2UlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D" },
      { productName: "Cucumbers", productPrice: "2", productImage: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1Y3VtYmVyfGVufDB8fDB8fHww" },
      { productName: "Bell Peppers", productPrice: "4", productImage: "https://images.unsplash.com/photo-1567539549213-cc1697632146?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Strawberries", productPrice: "5", productImage: "https://images.unsplash.com/photo-1694449070731-5c04f538b00b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RyYWJlcnJ5fGVufDB8fDB8fHww" },
      { productName: "Spinach", productPrice: "3", productImage: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Cauliflower", productPrice: "3", productImage: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Zucchini", productPrice: "2", productImage: "https://images.unsplash.com/photo-1596056094719-10ba4f7ea650?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8enVjY2hpbml8ZW58MHx8MHx8fDA%3D" },
      { productName: "Onions", productPrice: "2", productImage: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ]
  },
  {
    id: '7',
    name: "Olivia Garcia",
    picture: "https://static.actu.fr/uploads/2023/04/25221-230425151408445-0-960x640.jpg",
    address: "8642 Birch Boulevard",
    city: "DALLAS",
    mainProducts: "Pumpkins, squash, corn.",
    description: "Olivia Garcia is a skilled farmer known for her specialty crops such as pumpkins, squash, and corn. Her farm in Dallas boasts a wide variety of seasonal produce, harvested at the peak of freshness. Olivia's commitment to sustainable agriculture ensures that her crops are not only delicious but also environmentally friendly.",
    products: [
      { productName: "Eggs x6", productPrice: "3", productImage: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Fresh Milk", productPrice: "2", productImage: "https://images.unsplash.com/photo-1634141510639-d691d86f47be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1pbGt8ZW58MHx8MHx8fDA%3D" },
      { productName: "Organic Apples", productPrice: "5", productImage: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGVzfGVufDB8fDB8fHww" },
      { productName: "Tomatoes", productPrice: "4", productImage: "https://images.unsplash.com/photo-1444731961956-751ed90465a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" },
      { productName: "Carrots", productPrice: "2", productImage: "https://images.unsplash.com/photo-1550411294-b3b1bd5fce1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D" },
      { productName: "Potatoes", productPrice: "3", productImage: "https://images.unsplash.com/photo-1573196444577-af471298e034?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Fresh Bread", productPrice: "4", productImage: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Broccoli", productPrice: "3", productImage: "https://images.unsplash.com/photo-1628773822990-202aed1e567e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyb2NvbGl8ZW58MHx8MHx8fDA%3D" },
      { productName: "Lettuce", productPrice: "2", productImage: "https://images.unsplash.com/photo-1516906561371-53f48df1254d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxldHR1Y2UlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D" },
      { productName: "Cucumbers", productPrice: "2", productImage: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1Y3VtYmVyfGVufDB8fDB8fHww" },
      { productName: "Bell Peppers", productPrice: "4", productImage: "https://images.unsplash.com/photo-1567539549213-cc1697632146?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Strawberries", productPrice: "5", productImage: "https://images.unsplash.com/photo-1694449070731-5c04f538b00b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RyYWJlcnJ5fGVufDB8fDB8fHww" },
      { productName: "Spinach", productPrice: "3", productImage: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Cauliflower", productPrice: "3", productImage: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Zucchini", productPrice: "2", productImage: "https://images.unsplash.com/photo-1596056094719-10ba4f7ea650?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8enVjY2hpbml8ZW58MHx8MHx8fDA%3D" },
      { productName: "Onions", productPrice: "2", productImage: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ]
  },
  {
    id: '8',
    name: "Liam Nguyen",
    picture: "https://mobile-img.lpcdn.ca/v2/924x/r3996/93ff811d30a233868a7c913fbad58d51.jpg",
    address: "9753 Maple Drive",
    city: "SEATTLE",
    mainProducts: "Cucumbers, bell peppers, eggplants.",
    description: "Liam Nguyen is an experienced farmer specializing in cucumbers, bell peppers, and eggplants. His farm in Seattle is known for its high-quality produce, which is grown using sustainable farming practices. Liam's dedication to organic farming ensures that his vegetables are fresh, flavorful, and free of harmful chemicals.",
    products: [
      { productName: "Eggs x6", productPrice: "3", productImage: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Fresh Milk", productPrice: "2", productImage: "https://images.unsplash.com/photo-1634141510639-d691d86f47be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1pbGt8ZW58MHx8MHx8fDA%3D" },
      { productName: "Organic Apples", productPrice: "5", productImage: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGVzfGVufDB8fDB8fHww" },
      { productName: "Tomatoes", productPrice: "4", productImage: "https://images.unsplash.com/photo-1444731961956-751ed90465a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" },
      { productName: "Carrots", productPrice: "2", productImage: "https://images.unsplash.com/photo-1550411294-b3b1bd5fce1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D" },
      { productName: "Potatoes", productPrice: "3", productImage: "https://images.unsplash.com/photo-1573196444577-af471298e034?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Fresh Bread", productPrice: "4", productImage: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Broccoli", productPrice: "3", productImage: "https://images.unsplash.com/photo-1628773822990-202aed1e567e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyb2NvbGl8ZW58MHx8MHx8fDA%3D" },
      { productName: "Lettuce", productPrice: "2", productImage: "https://images.unsplash.com/photo-1516906561371-53f48df1254d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxldHR1Y2UlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D" },
      { productName: "Cucumbers", productPrice: "2", productImage: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1Y3VtYmVyfGVufDB8fDB8fHww" },
      { productName: "Bell Peppers", productPrice: "4", productImage: "https://images.unsplash.com/photo-1567539549213-cc1697632146?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Strawberries", productPrice: "5", productImage: "https://images.unsplash.com/photo-1694449070731-5c04f538b00b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RyYWJlcnJ5fGVufDB8fDB8fHww" },
      { productName: "Spinach", productPrice: "3", productImage: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Cauliflower", productPrice: "3", productImage: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Zucchini", productPrice: "2", productImage: "https://images.unsplash.com/photo-1596056094719-10ba4f7ea650?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8enVjY2hpbml8ZW58MHx8MHx8fDA%3D" },
      { productName: "Onions", productPrice: "2", productImage: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ]
  },
  {
    id: '9',
    name: "Emma Taylor",
    picture: "https://dyanecotnoir.com/wp-content/uploads/2022/07/ferme-maraichere-iStock-887287264-1024x695.jpg",
    address: "7531 Willow Lane",
    city: "BOSTON",
    mainProducts: "Lemons, limes, grapefruits.",
    description: "Emma Taylor is a passionate farmer specializing in citrus fruits such as lemons, limes, and grapefruits. Her farm in Boston is known for its vibrant and flavorful fruits, which are grown using sustainable farming methods. Emma's dedication to quality ensures that her citrus fruits are always fresh and delicious.",
    products: [
      { productName: "Eggs x6", productPrice: "3", productImage: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Fresh Milk", productPrice: "2", productImage: "https://images.unsplash.com/photo-1634141510639-d691d86f47be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1pbGt8ZW58MHx8MHx8fDA%3D" },
      { productName: "Organic Apples", productPrice: "5", productImage: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGVzfGVufDB8fDB8fHww" },
      { productName: "Tomatoes", productPrice: "4", productImage: "https://images.unsplash.com/photo-1444731961956-751ed90465a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" },
      { productName: "Carrots", productPrice: "2", productImage: "https://images.unsplash.com/photo-1550411294-b3b1bd5fce1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D" },
      { productName: "Potatoes", productPrice: "3", productImage: "https://images.unsplash.com/photo-1573196444577-af471298e034?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Fresh Bread", productPrice: "4", productImage: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Broccoli", productPrice: "3", productImage: "https://images.unsplash.com/photo-1628773822990-202aed1e567e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyb2NvbGl8ZW58MHx8MHx8fDA%3D" },
      { productName: "Lettuce", productPrice: "2", productImage: "https://images.unsplash.com/photo-1516906561371-53f48df1254d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxldHR1Y2UlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D" },
      { productName: "Cucumbers", productPrice: "2", productImage: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1Y3VtYmVyfGVufDB8fDB8fHww" },
      { productName: "Bell Peppers", productPrice: "4", productImage: "https://images.unsplash.com/photo-1567539549213-cc1697632146?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Strawberries", productPrice: "5", productImage: "https://images.unsplash.com/photo-1694449070731-5c04f538b00b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RyYWJlcnJ5fGVufDB8fDB8fHww" },
      { productName: "Spinach", productPrice: "3", productImage: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Cauliflower", productPrice: "3", productImage: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { productName: "Zucchini", productPrice: "2", productImage: "https://images.unsplash.com/photo-1596056094719-10ba4f7ea650?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8enVjY2hpbml8ZW58MHx8MHx8fDA%3D" },
      { productName: "Onions", productPrice: "2", productImage: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ]
  }
];


// controller that return all the existing farmers
  exports.getFarmers = async (req, res, next) => {
    res.status(200).json({
      message: 'Farmers successfully fetched.',
      farmers: FARMERS_DATA
    })

  };

  // controller that return the data on a specific farmer id
  exports.getFarmerById = async (req, res, next) => {
    const farmerId = req.params.farmerId
    
    const selectedFarmer = FARMERS_DATA.filter((farmer) => {
      return farmer.id === farmerId})
    
    if(selectedFarmer.length === 0){
      const error = new Error('No farmer found at this ID.');
      error.code = 404;
      return next(error)
    }

    res.status(200).json({
      message: 'Farmer at provided Id successfully found.',
      farmer: selectedFarmer[0]  
      })

  };


 // controller that creates a new farmer object with a unique id 
 exports.createFarmer = async (req, res, next) => {
  const uniqueUserId = uuidv4();
  const name = req.body.name;
  const address = req.body.address;
  const city = req.body.city;
  const mainProducts = req.body.mainProducts;
  const picture = req.body.picture;
  const description = req.body.description;
  

  FARMERS_DATA.push({
    id: uniqueUserId,
    name: name,
    address: address,
    city: city,
    mainProducts: mainProducts,
    picture: picture,
    description: description,
    products: []
  });

  res.status(201).json({
    message: 'New farmer successfully added',
    newFarmer: FARMERS_DATA[FARMERS_DATA.length - 1]
  })

 }; 



 // controller to delete a farmer based on id
 exports.deleteFarmer = async (req, res, next) => {
  const farmerId = req.params.farmerId

  const indexOfFarmer = FARMERS_DATA.findIndex((farmer) => {return farmer.id === farmerId});

  if(indexOfFarmer === -1){
    const error = new Error('No farmer found at this ID.');
    error.code = 404;
    return next(error);
  }

  FARMERS_DATA.splice(indexOfFarmer, 1)

  res.status(200).json({
    message: 'Farmer at selected id successfully deleted.',
    farmers: FARMERS_DATA
  })

 };


 // controller to update a Farmer data 
 exports.updateFarmer = async (req, res, next) => {
  const idToUpdate = req.params.farmerId
  
  const name = req.body.name;
  const address = req.body.address;
  const city = req.body.city;
  const mainProducts = req.body.mainProducts;
  const picture = req.body.picture;
  const description = req.body.description;
  const products = req.body.products

  const farmerToUpdate = FARMERS_DATA.findIndex((farmer) => {return farmer.id === idToUpdate});

  if(farmerToUpdate === -1){
    const error = new Error('No farmer found at this ID.');
    error.code = 404;
    return next(error)
  }

  FARMERS_DATA[farmerToUpdate] = {
    id: idToUpdate,
    name: name,
    address: address,
    city: city,
    mainProducts: mainProducts,
    picture: picture,
    description: description,
    products: products
  };

  res.status(200).json({
    message: 'Farmer successfully updated',
    updateFarmer: FARMERS_DATA[farmerToUpdate]
  })
  
 };




 //controller to add a product to a farmer profile 
 exports.addProduct = async (req, res, next) => {
  const farmerId = req.params.farmerId

  const farmerToAddProduct = FARMERS_DATA.findIndex((farmer) => {return farmer.id === farmerId});
  
  const newProduct = {
    productName: req.body.productName,
    productPrice: req.body.productPrice,
    productImage: req.body.productImage,
  }

  FARMERS_DATA[farmerToAddProduct].products.push(newProduct)

  res.status(200).json({
    message: 'New product added successfully.',
    farmer: FARMERS_DATA[farmerToAddProduct]
  })
  
 }
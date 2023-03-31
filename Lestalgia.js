//Define a variable to hold the number of NFTs 
let numberOfNFTs = 0; 
 
// Define a function to mint a new NFT and add its metadata to an array 
function mintNFT(name, affinity, image) { 
  // Define an object to hold the metadata for the new NFT 
  let newNFT = { 
    name: name, 
    affinity: affinity, 
    image: image 
  }; 
  // Add the new NFT to an array of NFTs 
  nfts.push(newNFT); 
  // Increment the count of the total number of NFTs 
  numberOfNFTs++; 
  // Return the new NFT object 
  return newNFT; 
} 
 
// Define a function to print all NFT metadata to the console 
function listNFTs() { 
  // Iterate over each NFT in the array of NFTs 
  for (let i = 0; i < nfts.length; i++) { 
    // Print the name, description, and image URL for each NFT to the console 
    console.log("Name: " + nfts[i].name); 
    console.log("Affinity: " + nfts[i].affinity); 
    console.log("Image URL: " + nfts[i].image); 
    console.log("\n") 
  } 
} 
 
// Define a function to return the total number of NFTs 
function getTotalSupply() { 
  return numberOfNFTs; 
} 
 
// Define an array to hold all NFTs 
let nfts = []; 
 
// Example usage: 
 
// Mint a new NFT 
let myNFT1 = mintNFT("Picachu", "Electric-Type Pokemon", "https://example.com/picachu.png"); 
let myNFT2 = mintNFT("Squirtle", "Water-Type Pokemon!", "https://example.com/squirtle.png"); 
let myNFT3 = mintNFT("Charmander", "Fire-Type Pokemon!", "https://example.com/charmander.png"); 
let myNFT4 = mintNFT("Regirock", "Rock-Type Pokemon!", "https://example.com/regirock.png"); 
let myNFT5 = mintNFT("Chikorita", "Grass-Type Pokemon!", "https://example.com/regirock.png"); 
// Print all NFT metadata to the console 
listNFTs(); 
 
// Get the total number of NFTs 
let totalNFTs = getTotalSupply(); 
console.log("Total NFTs: " + totalNFTs);

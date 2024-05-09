// Create a variable to hold your NFT's
let nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, image) {
    let nft = {
        name: name,
        description: description,
        image: image
    };
    nftCollection.push(nft);
}

// Create a function that will print all of your NFTs metadata to the console
function listNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Image: " + nft.image);
        console.log("------------------");
    });
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// Call your functions below this line

// Function to interactively mint NFTs based on user input
function mintNFTs() {
    let numNFTs = parseInt(prompt("How many NFTs do you want to mint?"));
    for (let i = 0; i < numNFTs; i++) {
        let name = prompt(`Enter name for NFT ${i + 1}:`);
        let description = prompt(`Enter description for NFT ${i + 1}:`);
        let image = prompt(`Enter image URL for NFT ${i + 1}:`);
        mintNFT(name, description, image);
    }
}

// Call the function to mint NFTs based on user input
mintNFTs();

// List all NFTs
listNFTs();

// Get total supply and print it
let totalSupply = getTotalSupply();
console.log(`Total number of NFTs minted: ${totalSupply}`);
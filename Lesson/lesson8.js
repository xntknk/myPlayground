//Exercise 1
setTimeout(() => {
    console.log('Loading...');
},3000);

//Exercise 2
function downloadFile(callback) {
    setTimeout(() => {
        console.log("Downloading file...");
        callback();  // Calls the next function
    }, 2000);
}

downloadFile(() => {
    console.log("Download Completed");
});


// //Exercise 3
const downloadFile = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Data Completed ✅");
        } else {
            reject("Error fetching data ❌");
        }
    }, 2000);
});

// Handling a promise
downloadFile
    .then(result => console.log(result))  
    .catch(error => console.log(error));   

//Exercise 4
async function downloadFile() {
    console.log("Downloading file...");
    await new Promise(resolve => setTimeout(resolve, 2000));  // Wait 2 sec
    console.log("Donload Completed");
}

downloadFile();

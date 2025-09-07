// Category Active Button Style (RemoveActive)
const removeActive = () => {
    const categoryBtn = document.querySelectorAll(".category-btn");
    categoryBtn.forEach(btn => btn.classList.remove("active"));
}

// Manage Spinner 
const manageSpinner = (status) => {
    if (status == true) {
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("trees-container").classList.add("hidden");
    }
    else {
        document.getElementById("trees-container").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden");
    }
}




// Load All Categories Function
const loadCategories = () => {
    const url = "https://openapi.programming-hero.com/api/categories";
    fetch(url)
        .then(res => res.json())
        .then(Categorie => displayCategories(Categorie.categories));
};


// Display All Categories Function
const displayCategories = (categories) => {
    //01. Get the container
    const categoriesContainer = document.getElementById("categories-container");
    categoriesContainer.innerHTML = "";
    //02. Create Element 
    categories.forEach(category => {
        const categoriesDiv = document.createElement("div");
        categoriesDiv.innerHTML = `
                    <div class="flex flex-col">
                                <button onclick="loadTreeByCategory(${category.id})" id="category-btn-${category.id}"
                                    class="category-btn py-2 px-3 text-[#1F2937] rounded-[4px] text-start w-full bg-[#15803D]/10 md:bg-transparent hover:bg-[#15803D]/70 hover:text-white duration-300 cursor-pointer">
                                    ${category.category_name} </button>
                            </div>
        `;
        //03. Append Element into Container 
        categoriesContainer.append(categoriesDiv);
    });
};
loadCategories();



// Load All Trees / Plants Function
const loadAllTrees = () => {
    manageSpinner(true);
    const url = "https://openapi.programming-hero.com/api/plants";
    fetch(url)
        .then(res => res.json())
        .then(plants => displayTrees(plants.plants));
};

// Load Trees / Plants by category Function
const loadTreeByCategory = (id) => {
    manageSpinner(true)
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(trees => {
            removeActive() //remove all active class
            const clickBtn = document.getElementById(`category-btn-${id}`)
            clickBtn.classList.add("active") //Add Active Class

            displayTrees(trees.plants)
        });
};



// Display Trees / Plants by category Function
const displayTrees = (trees) => {
    //01. Get the container
    const treesContainer = document.getElementById("trees-container");
    treesContainer.innerHTML = "";

    trees.forEach(tree => {

        // Limit description to 18 words
        const words = tree.description.split(" "); // Every single word colleted from Description using split
        const words20 = words.slice(0, 18).join(" "); // slice baboher kore 0 theeke 18 porjonto word alada korlam and join baboher kore tader k string a convert kora holo
        const shortDescription = words20 + (words.length > 18 ? "..." : " ");

        const treesCart = document.createElement("div");
        treesCart.innerHTML = `
                <div class=" space-y-4 bg-white rounded-[16px] p-4 h-full">
                            <!-- Trees Item Images -->
                            <div class="">
                                <img src="${tree.image}" class="w-full h-[200px] bg-[#EDEDED] rounded-[8px]">
                            </div>
                            <!-- Trees Item Content -->
                            <div>
                                <h4 class="font-semibold mb-1">${tree.name}</h4>
                                <p>${shortDescription}</p>
                            </div>
                            <!-- Trees Item Category and Price -->
                            <div class="flex justify-between items-center">
                                <p class="bg-[#DCFCE7] px-3 py-1 rounded-full text-[#15803D]">${tree.category}</p>
                                <p>৳${tree.price}</p>
                            </div>

                            <div>
                                <button
                                    class="bg-[#15803D] py-3 px-5 rounded-full text-white font-medium cursor-pointer w-full">
                                    Add to Cart</button>
                            </div>
                </div>
        `;
        //03. Append Element into Container 
        treesContainer.append(treesCart);
    });
    manageSpinner(false)
};
loadAllTrees();
loadTreeByCategory()


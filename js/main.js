///////////////////Loading////////////////

$(document).ready(function () {
    $('.loading').fadeOut(2000, function () {
        $('body').css('overflow','visible')
    })
})

///////////////////////Side Menu/////////////////

let OpenCloseSide = document.getElementById('OpenCloseSide');
let sideMenuLeftWidth = $('.sideMenuLeft').outerWidth();
$('.sideMenu').css('left', -sideMenuLeftWidth)

$('.fa-bars').click(function () {
    if ($('.sideMenu').css('left')== '0px') {
        $('.sideMenu').animate({ 'left': -sideMenuLeftWidth }, 1000)
        OpenCloseSide.classList.add('.fa-bars');
        OpenCloseSide.classList.remove('fa-xmark');
    }
    else{
        $('.sideMenu').animate({ 'left': '0' }, 1000)
        OpenCloseSide.classList.remove('.fa-bars');
        OpenCloseSide.classList.add('fa-xmark');
        new WOW().init();
    }
})

//////////////////////Get And Disply Data/////////////////////////

let Recipes = [];
getRecipe()
function getRecipe() 
{
    let httpReq = new XMLHttpRequest();
    httpReq.open('GET', 'https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken')
    httpReq.send();
    httpReq.addEventListener('readystatechange', function ()
    {
        if (httpReq.readyState == 4 && httpReq.status==200)
        {
            Recipes = JSON.parse(httpReq.response).meals;
            displyRecipe()
        }
    })
}

function displyRecipe() {
    let cartona = '';
    for (let i = 0; i <= Recipes.length-1; i++) {
        cartona +=
        `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="recipe bg-danger position-relative overflow-hidden">
                <img class='w-100' src="${Recipes[i].strMealThumb}" alt="">
                <div class="hoverItem ps-3 d-flex align-items-center h-100">
                    <h4 class="text-dark">${Recipes[i].strMeal}</h4>
                </div>
            </div>
        </div>
        `
    }
        document.getElementById('recipesData').innerHTML = cartona;
}

//////////////Disply Info Recipe/////////////

$('.itemm').click(function (e) { 
    let recipesName = e.target.innerHTML;
    $('.itemm').empty();
    $('#displyBySerach').empty();
    $('.contactUs').empty();
    let Recipes2 = [];
    let httpReq2 = new XMLHttpRequest();
    httpReq2.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipesName}`);
    httpReq2.send();
    httpReq2.addEventListener('readystatechange', function ()
    {
        if (httpReq2.readyState == 4 && httpReq2.status==200)
        {
            let Recipes2 = JSON.parse(httpReq2.response).meals;
            let cartona = '';
            cartona +=
                `
                <div class="sora col-lg-3">
                    <div class="recipe position-relative p-5 overflow-hidden">
                        <img class='w-100' src="${Recipes2[0].strMealThumb}" alt="">
                        <h2 class='text-white'>${Recipes2[0].strMeal}</h2>
                    </div>
                </div>
                <div class="col-lg-9">
                            <div class=" info text-white p-5">
                                <h3><span>Instructions</span></h3>
                                <p>${Recipes2[0].strInstructions}</p>
                                <h3><span>area</span> : ${Recipes2[0].strArea}</h3>
                                <h4><span>Category</span> : ${Recipes2[0].strCategory}</h4>
                                <h2><span>Recipes</span></h2>
                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure1} ${Recipes2[0].strIngredient1}</button>
                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure2} ${Recipes2[0].strIngredient2}</button>
                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure3} ${Recipes2[0].strIngredient3}</button>
                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure4} ${Recipes2[0].strIngredient4}</button>
                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure5} ${Recipes2[0].strIngredient5}</button>
                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure6} ${Recipes2[0].strIngredient6}</button>
                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure7} ${Recipes2[0].strIngredient7}</button>
                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure8} ${Recipes2[0].strIngredient8}</button>
                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure9} ${Recipes2[0].strIngredient9}</button>
                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure10} ${Recipes2[0].strIngredient10}</button>
                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure11} ${Recipes2[0].strIngredient11}</button>
                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure12} ${Recipes2[0].strIngredient12}</button>
                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure13} ${Recipes2[0].strIngredient13}</button>
                                <p class='tags my-5 py-2 '>Tags : <br> <br>
                                <button class="btn btn-info">${Recipes2[0].strTags}</button>
                                </p>
                                <a href="${Recipes2[0].strSource}" target='_blank'><button class="btn btn-success">Source</button></a>
                                <a href="${Recipes2[0].strYoutube}" target='_blank'><button class="btn btn-danger">Youtube</button></a>
                            </div>
                </div>
                `
            document.getElementById('dataDisply').innerHTML = cartona;
        }
    })
})

//////////////Disply Info Categories/////////////

$('#categories').click(function (e) {
    let categoryName = e.target.innerHTML;
    $('.itemm').empty();
    $('#dataDisply').empty();
    $('#areaDisply').empty();
    $('#displyBySerach').empty();
    $('.contactUs').empty();
    let Recipes3 = [];
    let httpReq3 = new XMLHttpRequest();
    httpReq3.open('GET', `https://www.themealdb.com/api/json/v1/1/categories.php`);
    httpReq3.send();
    httpReq3.addEventListener('readystatechange', function ()
    {
        if (httpReq3.readyState == 4 && httpReq3.status==200)
        {
            let Recipes3 = JSON.parse(httpReq3.response).categories;
            let cartona = '';
            for (let i = 0; i <= Recipes3.length-1; i++) {
            cartona +=
            `
            <div class="col-lg-3 col-md-4 col-sm-6 p-5">
                    <div class="recipe mt-5 category bg-black position-relative overflow-hidden">
                    <img class='w-100' src="${Recipes3[i].strCategoryThumb}" alt="">
                        <div class="hoverItem h-100 text-center">
                            <h1 class=''>${Recipes3[i].strCategory}</h1>
                            <p>${Recipes3[i].strCategoryDescription}</p>
                        </div>
                    </div>
            </div>
        `
    }
            document.getElementById('dataDisply').innerHTML = cartona;
        }
    })
    categoryDisply()
})

function categoryDisply() {
    $('#dataDisply').click(function (e) {
        $('#dataDisply').empty();
        $('#displyBySerach').empty();
        $('.contactUs').empty();
        let areaName = e.target.innerHTML;
        let Recipes5 = [];
        let httpReq5 = new XMLHttpRequest();
        httpReq5.open('GET', `https://www.themealdb.com/api/json/v1/1/filter.php?c=${areaName}`);
        httpReq5.send(); 
        httpReq5.addEventListener('readystatechange', function ()
        {
            if (httpReq5.readyState == 4 && httpReq5.status==200)
            {
                let Recipes5 = JSON.parse(httpReq5.response).meals;
                let cartona = '';
                for (let i = 0; i <= Recipes5.length-1 ; i++) {
                cartona +=
                `
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="recipe bg-danger position-relative overflow-hidden">
                        <img class='w-100' src="${Recipes5[i].strMealThumb}" alt="">
                        <div class="hoverItem ps-3 d-flex align-items-center h-100">
                            <h4 class="text-dark">${Recipes5[i].strMeal}</h4>
                        </div>
                    </div>
                </div>
            `
            }
                document.getElementById('dataDisply').innerHTML = cartona;
            }
        })
        $('#dataDisply').click(function (e) {
            $('#dataDisply').empty();
            let areaName = e.target.innerHTML;
            console.log(areaName);
            let Recipes2 = [];
            let httpReq2 = new XMLHttpRequest();
            httpReq2.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?s=${areaName}`);
            httpReq2.send();
            httpReq2.addEventListener('readystatechange', function () {
                if (httpReq2.readyState == 4 && httpReq2.status == 200) {
                    let Recipes2 = JSON.parse(httpReq2.response).meals;
                    let cartona = '';
                    cartona +=
                        `
                        <div class="sora col-md-3">
                            <div class="recipe position-relative p-5 overflow-hidden">
                                <img class='w-100' src="${Recipes2[0].strMealThumb}" alt="">
                                <h2 class='text-white'>${Recipes2[0].strMeal}</h2>
                            </div>
                        </div>
                        <div class="col-md-9">
                                    <div class=" info text-white p-5">
                                        <h3><span>Instructions</span></h3>
                                        <p>${Recipes2[0].strInstructions}</p>
                                        <h3><span>area</span> : ${Recipes2[0].strArea}</h3>
                                        <h4><span>Category</span> : ${Recipes2[0].strCategory}</h4>
                                        <h2><span>Recipes</span></h2>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure1} ${Recipes2[0].strIngredient1}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure2} ${Recipes2[0].strIngredient2}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure3} ${Recipes2[0].strIngredient3}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure4} ${Recipes2[0].strIngredient4}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure5} ${Recipes2[0].strIngredient5}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure6} ${Recipes2[0].strIngredient6}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure7} ${Recipes2[0].strIngredient7}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure8} ${Recipes2[0].strIngredient8}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure9} ${Recipes2[0].strIngredient9}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure10} ${Recipes2[0].strIngredient10}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure11} ${Recipes2[0].strIngredient11}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure12} ${Recipes2[0].strIngredient12}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure13} ${Recipes2[0].strIngredient13}</button>
                                        <p class='tags my-5 py-2 '>Tags : <br> <br>
                                        <button class="btn btn-info">${Recipes2[0].strTags}</button>
                                        </p>
                                        <a href="${Recipes2[0].strSource}" target='_blank'><button class="btn btn-success">Source</button></a>
                                        <a href="${Recipes2[0].strYoutube}" target='_blank'><button class="btn btn-danger">Youtube</button></a>
                                    </div>
                        </div>
                        `
                    document.getElementById('dataDisply').innerHTML = cartona;
                }
        })
        })
})
}

//////////////Disply Info Area /////////////

$('#area').click(function () {
    $('.itemm').empty();
    $('#dataDisply').empty();
    $('#displyBySerach').empty();
    $('.contactUs').empty();
    let Recipes4 = [];
    let httpReq4 = new XMLHttpRequest();
    httpReq4.open('GET', `https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    httpReq4.send();
    httpReq4.addEventListener('readystatechange', function ()
    {
        if (httpReq4.readyState == 4 && httpReq4.status==200)
        {
            let Recipes4 = JSON.parse(httpReq4.response).meals;
            let cartona = '';
            for (let i = 0; i <= Recipes4.length-5 ; i++) {
            cartona +=
            `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="recipe category shadow box-shadow-full text-center">
                <i class="fa-solid fa-city fa-3x text-danger"></i>
                <h1 class='text-white'>${Recipes4[i].strArea}</h1>
                </div>
            </div>
        `
        }
            document.getElementById('areaDisply').innerHTML = cartona;
        }
    })
    areaDisply()
})

function areaDisply() {
    $('#areaDisply').click(function (e) {
        $('#displyBySerach').empty();
        $('.contactUs').empty();
        let areaName = e.target.innerHTML;
        let Recipes5 = [];
        let httpReq5 = new XMLHttpRequest();
        httpReq5.open('GET', `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`);
        httpReq5.send();
        httpReq5.addEventListener('readystatechange', function () {
            if (httpReq5.readyState == 4 && httpReq5.status == 200) {
                let Recipes5 = JSON.parse(httpReq5.response).meals;
                let cartona = '';
                for (let i = 0; i <= Recipes5.length - 1; i++) {
                    cartona +=
                        `
                <div class="col-lg-3 col-md-4 col-sm-6 p-5">
                    <div class="recipe bg-danger position-relative overflow-hidden">
                        <img class='w-100' src="${Recipes5[i].strMealThumb}" alt="">
                        <div class="hoverItem ps-3 d-flex align-items-center h-100">
                            <h4 class="text-dark">${Recipes5[i].strMeal}</h4>
                        </div>
                    </div>
                </div>
            `
                }
                document.getElementById('areaDisply').innerHTML = cartona;
            }
        })
        $('#areaDisply').click(function (e) {
            $('#areaDisply').empty();
            let areaName = e.target.innerHTML;
            console.log(areaName);
            let Recipes2 = [];
            let httpReq2 = new XMLHttpRequest();
            httpReq2.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?s=${areaName}`);
            httpReq2.send();
            httpReq2.addEventListener('readystatechange', function () {
                if (httpReq2.readyState == 4 && httpReq2.status == 200) {
                    let Recipes2 = JSON.parse(httpReq2.response).meals;
                    let cartona = '';
                    cartona +=
                        `
                        <div class="sora col-md-3">
                            <div class="recipe position-relative p-5 overflow-hidden">
                                <img class='w-100' src="${Recipes2[0].strMealThumb}" alt="">
                                <h2 class='text-white'>${Recipes2[0].strMeal}</h2>
                            </div>
                        </div>
                        <div class="col-md-9">
                                    <div class=" info text-white p-5">
                                        <h3><span>Instructions</span></h3>
                                        <p>${Recipes2[0].strInstructions}</p>
                                        <h3><span>area</span> : ${Recipes2[0].strArea}</h3>
                                        <h4><span>Category</span> : ${Recipes2[0].strCategory}</h4>
                                        <h2><span>Recipes</span></h2>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure1} ${Recipes2[0].strIngredient1}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure2} ${Recipes2[0].strIngredient2}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure3} ${Recipes2[0].strIngredient3}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure4} ${Recipes2[0].strIngredient4}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure5} ${Recipes2[0].strIngredient5}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure6} ${Recipes2[0].strIngredient6}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure7} ${Recipes2[0].strIngredient7}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure8} ${Recipes2[0].strIngredient8}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure9} ${Recipes2[0].strIngredient9}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure10} ${Recipes2[0].strIngredient10}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure11} ${Recipes2[0].strIngredient11}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure12} ${Recipes2[0].strIngredient12}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure13} ${Recipes2[0].strIngredient13}</button>
                                        <p class='tags my-5 py-2 '>Tags : <br> <br>
                                        <button class="btn btn-info">${Recipes2[0].strTags}</button>
                                        </p>
                                        <a href="${Recipes2[0].strSource}" target='_blank'><button class="btn btn-success">Source</button></a>
                                        <a href="${Recipes2[0].strYoutube}" target='_blank'><button class="btn btn-danger">Youtube</button></a>
                                    </div>
                        </div>
                        `
                    document.getElementById('dataDisply').innerHTML = cartona;
                }
        })
        })
})
}

//////////////Disply By Search /////////////

$('#search').click(function (e) {
    let areaName = e.target.innerHTML;
    $('.itemm').empty();
    $('#dataDisply').empty();
    $('#areaDisply').empty();
    $('.search').removeClass('d-none')
    $('.contactUs').empty();
    $('body').css('backgroundColor', 'black')
    $('#SearchByName').keyup(function () {
        let Recipes5 = [];
        let httpReq5 = new XMLHttpRequest();
        httpReq5.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?s=${SearchByName.value}`);
        httpReq5.send();
        httpReq5.addEventListener('readystatechange', function () {
            if (httpReq5.readyState == 4 && httpReq5.status == 200) {
                let Recipes5 = JSON.parse(httpReq5.response).meals;
                let cartona = '';
                for (let i = 0; i <= Recipes5.length-1 ; i++) {
                cartona +=
                `
                <div class="col-lg-3 col-md-4 col-sm-6 ">
                    <div class="recipe position-relative overflow-hidden">
                        <img class='w-100' src="${Recipes5[i].strMealThumb}" alt="">
                        <div class="hoverItem ps-3 d-flex align-items-center h-100">
                            <h4 class="text-dark">${Recipes5[i].strMeal}</h4>
                        </div>
                    </div>
                </div>
                `
                }
                document.getElementById('displyBySerach').innerHTML = cartona;
            }
        })
        $('.itemm').empty();
    $('#dataDisply').empty();
    $('#areaDisply').empty();
    })
})

$('#search').click(function (e) {
    let areaName = e.target.innerHTML;
    $('.itemm').empty();
    $('#dataDisply').empty();
    $('#areaDisply').empty();
    $('.search').removeClass('d-none')
    $('.contactUs').empty();
    $('body').css('backgroundColor', 'black')
    $('#SearchByFirstLetter').keyup(function () {
        let Recipes5 = [];
        let httpReq5 = new XMLHttpRequest();
        httpReq5.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?f=${SearchByFirstLetter.value}`);
        httpReq5.send();
        httpReq5.addEventListener('readystatechange', function () {
            if (httpReq5.readyState == 4 && httpReq5.status == 200) {
                let Recipes5 = JSON.parse(httpReq5.response).meals;
                let cartona = '';
                for (let i = 0; i <= Recipes5.length-1 ; i++) {
                cartona +=
                `
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="recipe position-relative overflow-hidden">
                        <img class='w-100' src="${Recipes5[i].strMealThumb}" alt="">
                        <div class="hoverItem ps-3 d-flex align-items-center h-100">
                            <h4 class="text-dark">${Recipes5[i].strMeal}</h4>
                        </div>
                    </div>
                </div>
                `
                }
                document.getElementById('displyBySerach').innerHTML = cartona;
            }
        })
        $('.itemm').empty();
        $('#dataDisply').empty();
        $('#areaDisply').empty();
    })
    $('#displyBySerach').click(function (e) {
            $('#displyBySerach').empty();
            let areaName = e.target.innerHTML;
            console.log(areaName);
            let Recipes2 = [];
            let httpReq2 = new XMLHttpRequest();
            httpReq2.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?s=${areaName}`);
            httpReq2.send();
            httpReq2.addEventListener('readystatechange', function () {
                if (httpReq2.readyState == 4 && httpReq2.status == 200) {
                    let Recipes2 = JSON.parse(httpReq2.response).meals;
                    let cartona = '';
                    cartona +=
                        `
                        <div class="sora col-md-3">
                            <div class="recipe position-relative p-5 overflow-hidden">
                                <img class='w-100' src="${Recipes2[0].strMealThumb}" alt="">
                                <h2 class='text-white'>${Recipes2[0].strMeal}</h2>
                            </div>
                        </div>
                        <div class="col-md-9">
                                    <div class=" info text-white p-5">
                                        <h3><span>Instructions</span></h3>
                                        <p>${Recipes2[0].strInstructions}</p>
                                        <h3><span>area</span> : ${Recipes2[0].strArea}</h3>
                                        <h4><span>Category</span> : ${Recipes2[0].strCategory}</h4>
                                        <h2><span>Recipes</span></h2>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure1} ${Recipes2[0].strIngredient1}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure2} ${Recipes2[0].strIngredient2}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure3} ${Recipes2[0].strIngredient3}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure4} ${Recipes2[0].strIngredient4}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure5} ${Recipes2[0].strIngredient5}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure6} ${Recipes2[0].strIngredient6}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure7} ${Recipes2[0].strIngredient7}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure8} ${Recipes2[0].strIngredient8}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure9} ${Recipes2[0].strIngredient9}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure10} ${Recipes2[0].strIngredient10}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure11} ${Recipes2[0].strIngredient11}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure12} ${Recipes2[0].strIngredient12}</button>
                                        <button class="btn btn-white my-2">${Recipes2[0].strMeasure13} ${Recipes2[0].strIngredient13}</button>
                                        <p class='tags my-5 py-2 '>Tags : <br> <br>
                                        <button class="btn btn-info">${Recipes2[0].strTags}</button>
                                        </p>
                                        <a href="${Recipes2[0].strSource}" target='_blank'><button class="btn btn-success">Source</button></a>
                                        <a href="${Recipes2[0].strYoutube}" target='_blank'><button class="btn btn-danger">Youtube</button></a>
                                    </div>
                        </div>
                        `
                    document.getElementById('displyBySerach').innerHTML = cartona;
                }
        })
        })
})

//////////////Disply Info Area /////////////

$('#ingredients').click(function () {
    $('.itemm').empty();
    $('#dataDisply').empty();
    $('#displyBySerach').empty();
    $('.contactUs').empty();
    $('#areaDisply').empty();
    let Recipes4 = [];
    let httpReq4 = new XMLHttpRequest();
    httpReq4.open('GET', `https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    httpReq4.send();
    httpReq4.addEventListener('readystatechange', function ()
    {
        if (httpReq4.readyState == 4 && httpReq4.status==200)
        {
            let Recipes4 = JSON.parse(httpReq4.response).meals;
            let cartona = '';
            for (let i = 0; i <= Recipes4.length-548; i++) {
            cartona +=
            `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="recipe category shadow box-shadow-full text-center">
                <i class="fa-solid fa-bowl-food fa-3x text-success"></i>
                <h1 class='text-white'>${Recipes4[i].strIngredient}</h1>
                </div>
            </div>
        `
        }
            document.getElementById('areaDisply').innerHTML = cartona;
        }
    })
    $('#areaDisply').click(function (e) {
            $('#areaDisply').empty();
            let areaName = e.target.innerHTML;
            console.log(areaName);
            let Recipes2 = [];
            let httpReq2 = new XMLHttpRequest();
            httpReq2.open('GET', `https://www.themealdb.com/api/json/v1/1/filter.php?i=${areaName}`);
            httpReq2.send();
            httpReq2.addEventListener('readystatechange', function () {
                if (httpReq2.readyState == 4 && httpReq2.status == 200) {
                    let Recipes2 = JSON.parse(httpReq2.response).meals;
                    let cartona = '';
                    for (let i = 0; i <= Recipes2.length-1; i++){
                    cartona +=
                        `
                        <div class="col-lg-3 col-md-4 col-sm-6 p-5">
                            <div class="mt-5 recipe position-relative overflow-hidden">
                                <img class='w-100' src="${Recipes2[i].strMealThumb}" alt="">
                                <div class="hoverItem ps-3 d-flex align-items-center h-100">
                                    <h4 class="text-dark">${Recipes2[i].strMeal}</h4>
                                </div>
                            </div>
                        </div>
                        `
                    }
                    document.getElementById('dataDisply').innerHTML = cartona;
                }
                $('.dataDisply').click(function (e) { 
                    let recipesName = e.target.innerHTML;
                    $('.itemm').empty();
                    $('#displyBySerach').empty();
                    $('.contactUs').empty();
                    let Recipes2 = [];
                    let httpReq2 = new XMLHttpRequest();
                    httpReq2.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipesName}`);
                    httpReq2.send();
                    httpReq2.addEventListener('readystatechange', function ()
                    {
                        if (httpReq2.readyState == 4 && httpReq2.status==200)
                        {
                            let Recipes2 = JSON.parse(httpReq2.response).meals;
                            let cartona = '';
                            cartona +=
                                `
                                <div class="sora col-lg-3">
                                    <div class="recipe position-relative p-5 overflow-hidden">
                                        <img class='w-100' src="${Recipes2[0].strMealThumb}" alt="">
                                        <h2 class='text-white'>${Recipes2[0].strMeal}</h2>
                                    </div>
                                </div>
                                <div class="col-lg-9">
                                            <div class=" info text-white p-5">
                                                <h3><span>Instructions</span></h3>
                                                <p>${Recipes2[0].strInstructions}</p>
                                                <h3><span>area</span> : ${Recipes2[0].strArea}</h3>
                                                <h4><span>Category</span> : ${Recipes2[0].strCategory}</h4>
                                                <h2><span>Recipes</span></h2>
                                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure1} ${Recipes2[0].strIngredient1}</button>
                                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure2} ${Recipes2[0].strIngredient2}</button>
                                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure3} ${Recipes2[0].strIngredient3}</button>
                                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure4} ${Recipes2[0].strIngredient4}</button>
                                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure5} ${Recipes2[0].strIngredient5}</button>
                                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure6} ${Recipes2[0].strIngredient6}</button>
                                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure7} ${Recipes2[0].strIngredient7}</button>
                                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure8} ${Recipes2[0].strIngredient8}</button>
                                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure9} ${Recipes2[0].strIngredient9}</button>
                                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure10} ${Recipes2[0].strIngredient10}</button>
                                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure11} ${Recipes2[0].strIngredient11}</button>
                                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure12} ${Recipes2[0].strIngredient12}</button>
                                                <button class="btn btn-white my-2">${Recipes2[0].strMeasure13} ${Recipes2[0].strIngredient13}</button>
                                                <p class='tags my-5 py-2 '>Tags : <br> <br>
                                                <button class="btn btn-info">${Recipes2[0].strTags}</button>
                                                </p>
                                                <a href="${Recipes2[0].strSource}" target='_blank'><button class="btn btn-success">Source</button></a>
                                                <a href="${Recipes2[0].strYoutube}" target='_blank'><button class="btn btn-danger">Youtube</button></a>
                                            </div>
                                </div>
                                `
                            document.getElementById('dataDisply').innerHTML = cartona;
                        }
                    })
                })
        })
        })
})

//////////////Disply Contact US /////////////

$('#contactUs').click(function () {
    $('.itemm').empty();
    $('#dataDisply').empty();
    $('#areaDisply').empty();
    $('#displyBySerach').empty();
    $('.search').addClass('d-none')
    $('body').css('backgroundColor', 'black')
    $('.contactUs').removeClass('d-none')
})
$(document).ready(function(){

    let postsContent =  $(".add-posts-here");

$.get("../JSON/JSON.json",function(data,status){
    console.log(data[0].title)
    data.forEach((myPost,index) => {
        postsContent.append(`
        <div class="Posts mt-3 mb-3">
        <div class="ps-lg-4 pe-lg-4 ps-sm-3 ps-sm-3">
            <div class="post-content">
                <div class="d-flex p-2 post-header position-relative">
                    <a href="##"><img src="${myPost.image}" alt="" style="width: 40px;height: 40px; border-radius: 50%;" title="Account"></a>
                    <div>
                        <h5 class="text-dark">ITI</h5>
                        <span style="font-size: 13px;">5h</span>
                        <span style="font-size: 13px;"><i class="fa-solid fa-earth-americas"></i></span>
                    </div>
                    <div class="position-absolute top-0 end-0 p-3">
                        <i class="fa-solid fa-ellipsis fs-4"></i>
                        <i class="fa-solid fa-xmark fs-3 ms-3"></i>
                    </div>
                </div>
                <div class="post-text">
                    <p class="text-dark text-start ms-1">${myPost.title}</p>
                    <p class="text-dark text-start ms-1">${myPost.body}</p>
                    <img src="${myPost.image}" class="w-100" style="height: 400px;">
                </div>
                <div class="post-icons border-top mt-3 d-flex justify-content-around">
                    <div class="like w-25 m-2 p-1">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <span>Like</span>
                    </div>
                    <div class="comment w-25 m-2 p-1">
                        <i class="fa-regular fa-comment"></i>
                        <span>Comment</span>
                    </div>
                    <div class="send w-25 m-2 p-1">
                        <i class="fa-brands fa-whatsapp"></i>
                        <span>Send</span>
                    </div>
                    <div class="share w-25 m-2 p-1">
                        <i class="fa-solid fa-share"></i>
                        <span>Share</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `)
    });
}).then(function(){
            /*  Pagination  */
    //all posts
    let allPosts = $(".Posts");
    // Length of posts
    let countPosts = allPosts.length;
    let currentPost = 1;
    // Prev & next buttons
    let btnPrevious = $('#previous-post');
    let btnNext = $('#naxt-post');
    
    // Pagination ul
    let paginationUl = $('#Pagination-ul');
    
    //1- add paginations in ul
    let numberPaginationItems = Math.ceil(countPosts / 10);
    for (let i = 1; i <= numberPaginationItems; i++) {
        paginationUl.append(
            `<li class="ms-2 ps-3 pe-3 pt-2 pb-2">${i}</li>`
        )
    }

    // Pagination items
    let paginationItems = $('#Pagination-ul li');

    // call showPosts at first
    let startPosts = 0;
    let endPosts = 10;
        showPosts(startPosts,endPosts);
    // click buttons
    btnNext.on('click',function(){
        if (btnNext.hasClass('disabled')) {
            return false;
        }else{
            currentPost++;
            startPosts += 10;
            endPosts += 10;
            showPosts(startPosts,endPosts);
        }
    })

    btnPrevious.on('click',function(){
        if (btnPrevious.hasClass('disabled')) {
            return false;
        }else{
            currentPost--;
            startPosts -= 10;
            endPosts -= 10;
            showPosts(startPosts,endPosts);
        }
    })

    // Click pagination
    paginationItems.each(function(index,element){
        $(element).on('click',function(){
            startPosts = index * 10;
            endPosts = startPosts + 10;
            currentPost = index + 1;
            showPosts(startPosts,endPosts);
        })
    })

    //3- Show specific number of posts
    function showPosts(startPosts,endPosts){
        // call remove active function
        removeAllActive();

        if (startPosts < 0) {
            startPosts = 0;
        }
        if (endPosts > countPosts) {
            endPosts = countPosts;
        }
        // show posts
        for (let i = startPosts; i < endPosts; i++) {
            allPosts[i].classList.add('show-post');
            allPosts[i].classList.remove('hide-post');
        }

        // current pagination number
        $('#Pagination-ul li')[currentPost - 1].classList.add('active');

        // Buttons
        if (currentPost == 1) {
            btnPrevious.addClass('disabled');
        }else{
            btnPrevious.removeClass('disabled');
        }
        if (currentPost == numberPaginationItems) {
            btnNext.addClass('disabled');
        }else{
            btnNext.removeClass('disabled');
        }
    }


    // 2- Remove active
    function removeAllActive(){
        paginationItems.each(function(index,item){
            $(item).removeClass('active');
        })

        allPosts.each(function(index,post){
            $(post).removeClass('show-post');
            $(post).addClass('hide-post');
        })
    }

})


})

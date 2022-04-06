function toggleLike(x) {
    like_value_name = `${x}-likeid-likeCounter`;
    let like_value = window.localStorage.getItem(like_value_name);
    like_value ++;
    
    like_id = `#${x}-likeid`;
    like_p = document.querySelector(like_id).innerHTML = like_value;
    window.localStorage.setItem(like_value_name, like_value);
  };
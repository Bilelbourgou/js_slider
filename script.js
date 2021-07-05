class slider {
    constructor(){
        this.images = [];
        this.images[0] = "img/img1.jpg";
        this.images[1] = "img/img2.jpg";
        this.images[2] = "img/img3.jpg";

        this.links = [];
        this.links[0] = "https://www.google.com/search?q=images&rlz=1C1CHBF_frTN915TN915&sxsrf=ALeKk01j116a7kjG7w6uLdG_zZUA7Duc4Q:1623846190316&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjPqd-6kpzxAhUW_7sIHZzYC8sQ_AUoAXoECAEQAw";
        this.links[1] = "https://www.google.com/search?q=images&rlz=1C1CHBF_frTN915TN915&sxsrf=ALeKk01j116a7kjG7w6uLdG_zZUA7Duc4Q:1623846190316&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjPqd-6kpzxAhUW_7sIHZzYC8sQ_AUoAXoECAEQAw";
        this.links[2] = "https://www.google.com/search?q=images&rlz=1C1CHBF_frTN915TN915&sxsrf=ALeKk01j116a7kjG7w6uLdG_zZUA7Duc4Q:1623846190316&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjPqd-6kpzxAhUW_7sIHZzYC8sQ_AUoAXoECAEQAw";
        this.counter = 0 ;

        this.playSlider();

        setInterval(()=>{
            this.playSlider();

        },2500);
    }
    playSlider(){
        if (this.counter<this.images.length - 1){
            this.counter++;
        }
        else{
            this.counter = 0;
        }
        document.slider.src = this.images[this.counter];
        document.getElementById("linkImg").href=this.links[this.counter];
    }
}
onload = new slider();
(($)=>{
    // Modern equivalent of $(document).ready()
    $(function () { 
    

        /*
        ========= all js code goes here======
        */


        // class for navmenu
        class Navmenu{
            constructor(){
                // get all the necessary element's reference               
                this.init();
            }
            
              // initialize the navmenu element
              init(){
                this.bindEvents();

            }

              // bind any eleements event handlers
              bindEvents(){
                $(document).on('mouseover  touchstart', '.nav-category-list',(e)=>this.showSubcategoryOverlay(e, true));
            }

         
        }


        // class for home banner
        // class HomeBanner{
        //     constructor(){
        //         this.init();
        //         this.bindEvents();
        //     }

        //     // methods
        //     init(){

        //     }

        //     bindEvents() {
        //     }



        // }









        const navmenu = new Navmenu();



    });
})(jQuery)


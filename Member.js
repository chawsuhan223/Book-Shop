var menu = document.getElementById('menu');
        function toggleMenu() {
            menu.classList.toggle('hidden');
            menu.classList.toggle('w-full');
            menu.classList.toggle('h-screen');
        }
        function toggleText() {
            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more");
            var button = document.getElementById("button");

            if (dots.classList.contains("hidden")) {
               
                dots.classList.remove("hidden");

               
                moreText.classList.add("hidden");

                button.innerHTML = "Read more";
            } else {
                
                dots.classList.add("hidden");

                moreText.classList.remove("hidden");

         
                button.innerHTML = "Read less";
            }
        }
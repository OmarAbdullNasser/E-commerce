<template>
    <div class="bg-black text-[#949494] py-40  font-titleFont">
        <div class="max-w-screen-xl mx-auto grid grid-cols-4 ">
            <!--LogoIcons Start here-->
            <div class="flex flex-col gap-7">
                <img class="w-32" src="../assets/logoLight.png" alt="">
                <p class="text-white text-sm tracking-wide text-left">@VueBD.com</p>
                <img class="w-56" src="../assets//paymentLogo.png" alt="">
                <div class="flex gap-5 text-lg text-gray-400">  
                    <fa :icon="['fab', 'github']" class="hover:text-white duration-300 cursor-pointer" />
                    <fa :icon="['fab', 'youtube']"  class="hover:text-white duration-300 cursor-pointer" />
                    <fa :icon="['fab', 'facebook']"  class="hover:text-white duration-300 cursor-pointer" /> 
                    <fa :icon="['fab', 'x-twitter']"  class="hover:text-white duration-300 cursor-pointer"/>
                    <fa :icon="['fab', 'instagram']" class="hover:text-white duration-300 cursor-pointer"/>
                 </div> 
            </div>

             <!--LogoIcons end  here-->
            
             <!--LocateUs start here-->
             <div>
                <h2 class="text-2xl font-semibold  text-white mb-4">locate Us</h2>
                <div class="text-base flex flex-col  gap-2">
                    <p>MBD,Ruwi, Muscat-Oman</p>
                    <p>Mobile: 00968 97859628</p>
                    <p>Phone: 00968 24769821</p>
                    <p>e-mail: bazar@gmail.com</p>
                </div>
             </div>

             <!--LocateUs end here-->

             <!--profile start here-->
             <div>
                <h2 class="text-2xl font-semibold text-left text-white mb-4">profile</h2>
                <div class="text-base flex flex-col gap-2">
                    <p class="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                        <span class="material-symbols-outlined">person</span>
                        my account 
                    </p>

                    <p class="flex items-center gap-3 hover:text-white duration-300 cursor-pointer ml-1">
                        <fa :icon="['fab', 'paypal']" />
                        checkout
                    </p>

                    <p class="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                        <span class="material-symbols-outlined">house</span>
                        order tracking
                    </p>

                    <p class="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                        <span class="material-symbols-outlined">location_on</span>
                        help & support
                    </p>

                </div>
             </div>
             <!--profile end here-->


             <!--Subscribe Start here-->
             <div class="flex flex-col justify-center">
                <input 
                type="text"
                placeholder="e-mail"
                class="bg-transparent border px-4 py-2 text-sm"
                >
                <button class="text=sm border text-white border-t-0 hover:gb-gray-900 active:bg-white active:text-black">Subscribe</button>
             </div>

             <!--Subscribe end here-->

        </div>
    </div>
</template>

<script>

export default {
     components:{
        
     }
}
</script>

<style>

</style>
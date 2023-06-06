<template>
    <collapsible-accordion header="Organizations">
            <div class="mt-5">
                <fieldset>
                    <ul class="flex flex-row flex-wrap">
                        <li class="h-8 w-1/2">
                            <input  id="VueTube" type="checkbox" class="mr-3">
                            <label for="VueTube">VueTube</label>
                         </li>
                         <li class="h-8 w-1/2">
                             <input  id="VueTube" type="checkbox" class="mr-3">
                             <label for="VueTube">VueTube</label>
                         </li>
                         <li class="h-8 w-1/2">
                              <input  id="VueTube" type="checkbox" class="mr-3">
                             <label for="VueTube">VueTube</label>
                        </li>
                        <li class="h-8 w-1/2">
                              <input  id="VueTube" type="checkbox" class="mr-3">
                             <label for="VueTube">VueTube</label>
                          </li>
                    </ul>
                 </fieldset>
            </div>
        </collapsible-accordion>
</template>

<script>
import CollapsibleAccordion from '../../shared/CollapsibleAccordion.vue';

    export default {
        name: "JobFiltersSidebarOrgs",
        components: { CollapsibleAccordion }

    }
</script>
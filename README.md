# PokeDex Challange

### Functionality
An app built with React. 

Users can search for pokemon with the search bar. If a query matches a pokemon in the pokeAPI, that pokemon's information will appear and users can add a Pokemon to their favorites. 

Users can navigate between two tabs. One houses a user's favorite Pokemon, the other houses the search functionality. This was built with react router.

On the favorites page, users can look at their favorite pokemon and remove them from their favorites. 

### What could have gone better
I spent too long navigating through the API trying to get the Pokedex entry to appear. This was a failed effort and could've been used creating reusable components to view single Pokemon information and reuse that data to view single favorite pokemon. 

With another couple hours I could've gotten these components made and the application looking prettier.

### What went well.
Navigating the API, besides the pokedex entries.
Using splice method to remove individual pokemon from the favorites state array.
Taking the data from the API and passing it down as props to singlePokemon component. Mapping through this data allowed the user to view pokemon type, stats, and abilities.




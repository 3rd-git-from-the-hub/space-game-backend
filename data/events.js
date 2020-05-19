module.exports = [
  {
    event_name: 'Desert Crops',
    planet_id: 1,
    event_image: 'image',
    event_description: 'As you land your ship you see some of the of the Alien farmers from this planet screaming at you. You quickly realize youve landed in the center of there crops! They seem really upset at your actions',
    event_choices: [{
      choice_description: 'Attempt to explain the situation to the indigenous people.',
      roll_needed: 5,
      roll_type: 'diplomacy',
      result: {
        sucess: 'They reluctantly forgive you and allow you to leave the planet peacefully.',
        failure: 'They scream and start banging on your ship and kick you off planet!'
      },
      rewards: {
        success_fuel: 0,
        success_credit: 0,
        success_health: 0,
        failure_fuel: 0,
        failure_credit: 0,
        failure_health: -2,
      } 
    },
    {
      choice_description: 'Notice things are getting out of hand and prepare to handle the situation with force.',
      roll_needed: 6,
      roll_type: 'combat',
      result: {
        sucess: 'You power on your ships weapons and defend yourself against the alien farmers. After dealing with the Alien farmers you gather the supplies they had on planet..... you had to defend yourself, right?',
        failure: 'You power on your ships weapons and attempt to defend yourself. You are quickly overpowered by the alien farmers as they steal your supplies. Luckily you break away and are able to leave planet before they can damage your ship any further.'
      },
      rewards: {
        success_fuel: 1,
        success_credit: 2,
        success_health: 0,
        failure_fuel: 0,
        failure_credit: -2,
        failure_health: -2,
      } },
    {
      choice_description: 'Realize your mistake and attempt to use your ships facilities to correct the problem.',
      roll_needed: 5,
      roll_type: 'science',
      result: {
        sucess: 'They seem wary at first, but you create some advanced farming tools from your ship. The Alien farmers are ecstatic and allow you to stay the night in there village!',
        failure: 'The tools you provide quickly fall apart and the Alien farmers scream and kick you off planet!'
      },
      rewards: {
        success_fuel: 2,
        success_credit: -1,
        success_health: 2,
        failure_fuel: 0,
        failure_credit: 0,
        failure_health: -2,
      } }
    ]
  },
  {
    event_name: 'Oxygen Depletion',
    planet_id: 2,
    event_image: 'image',
    event_description: 'As you are gliding down to the planet a winged creature of some sort slams into your ship and causes you to crash into the surface.',
    event_choices: [{
      //add a second choice for combat
      choice_description: 'As you look over your ship you see that your life support system has been damaged. You put your space suit on and head outside to attempt to fix the damage.',
      roll_needed: 4,
      roll_type: 'science',
      result: {
        sucess: 'You finish the repairs on your life support system in time and even learn some interesting information from the damage.',
        failure: 'You take way to long to finish the repairs and have to rest on planet before continuing your journey.'
      },
      rewards: {
        success_fuel: 0,
        success_credit: 1,
        success_health: 0,
        failure_fuel: 0,
        failure_credit: -1,
        failure_health: -1
      } }
    ]
  },

  {
    event_name: 'Risk and Reward',
    planet_id: 3,
    event_image: 'image',
    event_description: 'You land your ship on planet to gather any supplies available to help on your journey. Nothing is setting off the scanner around your ship. You lower the bay door and walk onto the cold hard surface of this planet with your weapons. You find some minerals that would be worth a good amount of credits. You start to gather these materials when you hear a low rumble approaching you.',
    event_choices: [{
      // add science choices
      choice_description: 'You spin around with your rifle and attempt to defend yourself from the large apex-predator!',
      roll_needed: 6,
      roll_type: 'combat',
      result: {
        sucess: 'You unload your rifles clip into the apex predator before it is able to close the distance. The rare minerals are yours!',
        failure: 'The apex predator leaps into the air and lands next to you slashing and biting at your body. You get into a prolonged fight but come out on top. Sadly the apex predator did some damage in return.'
      },
      rewards: {
        success_fuel: 0,
        success_credit: 8,
        success_health: 0,
        failure_fuel: 0,
        failure_credit: 3,
        failure_health: -2,
      } }
    ]
  },

  {
    event_name: 'Ancient City',
    planet_id: 4,
    event_image: 'image',
    event_description: 'You land your ship on the outskirts of the ancient abandoned city to see what you can find.',
    event_choices: [{
      choice_description: 'You spot a local native looking at you and your ship curiously. It seems the Aliens of this planet have lost whatever technological advancements they had. You decide to introduce yourself and attempt some diplomacy.',
      roll_needed: 6,
      roll_type: 'diplomacy',
      result: {
        sucess: 'The alien leads you to his tribe and shows you there treasures. They seem to value food, strong metals, and things that help them hunt and protect themselves. You offer some of your tools and an advanced heater that never runs out of power. They are extremely grateful and offer you some old technology.',
        failure: 'You attempt to communicate with the Alien. They howl and run off into the dense city and lose you. You look around for any supplies but find nothing of value, such a waste of fuel. Time to move on.'
      },
      rewards: {
        success_fuel: 2,
        success_credit: 2,
        success_health: 0,
        failure_fuel: -1,
        failure_credit: 0,
        failure_health: 0,
      }
    },
    {
      choice_description: 'You decide to search the ancient abandoned city for any useful supplies.',
      roll_needed: 5,
      roll_type: 'science',
      result: {
        sucess: 'You use your science tools at your disposal to scan the surrounding buildings. Your scanner goes off and you find a old research laboratory with a cacheful of supplies!',
        failure: 'It seems the city has already been ravaged by scavengers. Time to move on.'
      },
      rewards: {
        success_fuel: 1,
        success_credit: 3,
        success_health: 0,
        failure_fuel: 0,
        failure_credit: -1,
        failure_health: 0,
      } }
    ]
  }
];
  

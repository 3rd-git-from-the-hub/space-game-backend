module.exports = [
  {
    event_name: 'Desert Crops',
    planet_id: 1,
    event_image: 'https://kevishere.files.wordpress.com/2017/12/pr-crops.jpg?w=648',
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
        failure_health: -1,
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
        failure_credit: 0,
        failure_health: -1,
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
        failure_health: -1,
      } }
    ]
  },
  {
    event_name: 'Oxygen Depletion',
    planet_id: 2,
    event_image: 'https://66.media.tumblr.com/8c3d6ffed9be5b4ec120c6665b177084/tumblr_nnja23kKnc1s0eroxo1_640.jpg',
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
    event_image: 'https://images.theconversation.com/files/157841/original/image-20170222-1364-hr3hcv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip',
    event_description: 'You land your ship on planet to gather any supplies available to help on your journey. Nothing is setting off the scanner around your ship. You lower the bay door and walk onto the cold hard surface of this planet with your weapons. You find some minerals that would be worth a good amount of credits. You start to gather these materials when you hear a low rumble approaching you.',
    event_choices: [{
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
    event_image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cb63c2f9-bbd6-498a-902d-7627d6d48a05/dakedq-3ee895c6-5c3a-4c12-bd16-0f2ee6ecdc11.jpg/v1/fill/w_798,h_515,q_75,strp/alien_city_by_arrowfire_dakedq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTUiLCJwYXRoIjoiXC9mXC9jYjYzYzJmOS1iYmQ2LTQ5OGEtOTAyZC03NjI3ZDZkNDhhMDVcL2Rha2VkcS0zZWU4OTVjNi01YzNhLTRjMTItYmQxNi0wZjJlZTZlY2RjMTEuanBnIiwid2lkdGgiOiI8PTc5OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.6muSyo7qL4gNrGRM_roLX8twtkab_tnCCNwuv4vY-R8',
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
  },
  {
    event_name: 'FrostBite?',
    planet_id: 5,
    event_image: 'https://i.pinimg.com/originals/55/c4/89/55c4892d99b434106e05ee892e6b54de.jpg',
    event_description: 'You land your ship on the Icy planet hoping to find something useful on your journeys.',
    event_choices: [{
      choice_description: 'You notice a large shape encased in ice a few hundred yards from your position.',
      roll_needed: 7,
      roll_type: 'science',
      result: {
        sucess: 'With your equipment in hand you head over to the frozen shape. You see its a old satelite from a long time ago. You melt the ice and recover what you can from it.',
        failure: 'With your equipment in hand you head over to the frozen shape. You see its a old satelite. Sadly you are unable to free it from its cold prison. When you return to your ship you see its damaged from the blizzard. Time to move on.'
      },
      rewards: {
        success_fuel: 1,
        success_credit: 1,
        success_health: 0,
        failure_fuel: 0,
        failure_credit: 0,
        failure_health: -1,
      }
    },
    {
      choice_description: 'You see behind you there is a rock formation with a cave entrance. Perhaps there are some minerals inside you could use.',
      roll_needed: 5,
      roll_type: 'combat',
      result: {
        sucess: 'As you enter the cave complex you quickly realize you are not alone! You pull your flare out and light it seeing a large multi eyed creature scurrying toward you. You turn on your blaster and scare it away with a warning shot. You quickly find some minerals that will help your journey and decide to leave.',
        failure: 'As you enter the cave complex you do not notice the creature crawling behind you. It quickly overwhelms you and tears into your space suit. You run out of the cave hoping you can make it to your ship in time!'
      },
      rewards: {
        success_fuel: 1,
        success_credit: 1,
        success_health: 0,
        failure_fuel: 0,
        failure_credit: 0,
        failure_health: -2,
      } }
    ]
  },
  {
    event_name: 'Do not touch the tar!',
    planet_id: 6,
    event_image: 'https://i.pinimg.com/originals/92/ee/d8/92eed8171d698f4d2aa1bb94ee24e350.jpg',
    event_description: 'You land your ship on Xivon III. It seems mostly deserted and has a foul smell about it. The large pools of what you are guessing is tar keep bubbling...wait is the tar moving toward you?',
    event_choices: [{
      choice_description: 'You are shocked as the tar comes sliming over toward you! You power up your ships weapons and shields and attempt to fight the entity off.',
      roll_needed: 5,
      roll_type: 'combat',
      result: {
        sucess: 'You quickly turn your ships weapons on the entity and shoot it back into the tar pit. You quickly notice more and more of these entitys are coming out of the surrounding pits. Time to move on!',
        failure: 'You quickly turn your ships weapons on the entity but miss your first few shots. Your ships alarms start to blare as its eating into your hull. You quickly power on the thrusters and take off into space. Time to check the damage.'
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
      choice_description: 'You scream and run as the tar comes sliming over toward you. You enter your computers systems to prepare for the creature.',
      roll_needed: 5,
      roll_type: 'science',
      result: {
        sucess: 'You enter your ships systems to change the frequency of your shields. If this is anything like Earth you know exactly what to do! You hear the entity scream as it attempts to attack your ship. It rolls its way back into the pit and you take the oppurtunity to leave this place.',
        failure: 'The entity slams into your ships and your alarms start to blare as its eating into your hull. You quickly power on the thrusters and take off into space. Time to check the damage.'
      },
      rewards: {
        success_fuel: 0,
        success_credit: 0,
        success_health: 0,
        failure_fuel: 0,
        failure_credit: 0,
        failure_health: -2,
      } }
    ]
  },
  {
    event_name: 'Harvesting Gas',
    planet_id: 7,
    event_image: 'https://vignette.wikia.nocookie.net/warframe/images/e/ee/Plains_of_Eidolon_at_Day_%282%29.jpg/revision/latest?cb=20180717001626',
    event_description: 'You land your ship on Noxabas I and take in the scenery. It seems these large fissures are realising some type of gas. It could probably help fuel your ship.',
    event_choices: [{
      choice_description: 'You see in the distance a alien looking facility. Perhaps they are friendly?',
      roll_needed: 5,
      roll_type: 'diplomacy',
      result: {
        sucess: 'You approach the facility and a native of this planet steps out of the doors to meet you. You exchange words and they agree to let you take some of the gas from there facility.',
        failure: 'You approach the facility and a native of this planet steps out of the doors to meet you. You must have said something very upsetting as they seems to be calling to there comrades in the building. Time to move on!'
      },
      rewards: {
        success_fuel: 1,
        success_credit: 0,
        success_health: 0,
        failure_fuel: 0,
        failure_credit: 0,
        failure_health: 0,
      }
    },
    {
      choice_description: 'You see a fissure that is perfectly positioned for your ships harvester. Perhaps you can work the system to your advantage.',
      roll_needed: 7,
      roll_type: 'science',
      result: {
        sucess: 'You hover your ship over the fissure and start working at your terminal. After some time and a large amount of luck you are able to extract the gas into your ships reserve tank.',
        failure: 'You hover your ship over the fissure and start working at your terminal. It seems you are unable to properly break down the gasses composition and it leaks into your ships systems. Time to move on.'
      },
      rewards: {
        success_fuel: 1,
        success_credit: 0,
        success_health: 0,
        failure_fuel: 0,
        failure_credit: 0,
        failure_health: -1,
      } 
    },
    {
      choice_description: 'You see in the distance a alien looking facility harvesting gas. A facility that advanced must have things worth taking.',
      roll_needed: 8,
      roll_type: 'combat',
      result: {
        sucess: 'You grab your weapons and head over to the facility. As you enter the facility you see multiple workers harvesting gas and placing them into energy capsules. You yell a few commands and they all back away. You fill your bag full of these capsules and make it back to your ship. Time to move on.',
        failure: 'You grab your weapons and head over to the facility. As you enter the facility you get into a fire fight with some of the guards of the building. You quickly escape back to your ship and start to take off. They take some shots which damage your hull in your lift off.'
      },
      rewards: {
        success_fuel: 2,
        success_credit: 0,
        success_health: 0,
        failure_fuel: 0,
        failure_credit: 0,
        failure_health: -1,
      } }
    ]
  },
  {
    event_name: 'I feel like this has happened in a movie before...',
    planet_id: 8,
    event_image: 'https://i.redd.it/erbux89v0lx11.jpg',
    event_description: 'You land on Yoraporr I and start to gather supplies. Did something just shimmer in that tree?',
    event_choices: [{
      choice_description: 'Its probably nothing, just in case though maybe I should introduce myself.',
      roll_needed: 10,
      roll_type: 'diplomacy',
      result: {
        sucess: 'You call out to the tree and declare your intentions. A very long uncomfortable moment passes then something jumps out of the tree. You watch as it appears before your eyes. It was invisible! It offers you a small bag and then dissapears into the deep jungle. You examine the bag and see its full of supplies. Time to move on!',
        failure: 'You call out to the tree and declare your intentions. After a short amount of time 3 red dots start to appear on your body. You quickly run toward your ship as the being starts to unleash energy blasts. You attempt to leave planet as its shooting at your ship.'
      },
      rewards: {
        success_fuel: 1,
        success_credit: 1,
        success_health: 1,
        failure_fuel: 0,
        failure_credit: 0,
        failure_health: -3,
      }
    },
    {
      choice_description: 'You slowly pull out your weapon acting like you do not notice it inside the tree.',
      roll_needed: 9,
      roll_type: 'combat',
      result: {
        sucess: 'You spin around and take a shot at the being inside the tree. It lets out a guttural noise and you see 3 red dots appear on your chest as it unleashes a energy blast. You quickly dodge out of the way and keep shooting. It goes quite for sometime and you finally notice you landed one of your shots. You take what you can off of its invisble corpse and leave.',
        failure: 'You spin around and take a shot at the being inside the tree. It lets out a guttural noise and you see 3 red dots appear on your chest as it unleashes energy blasts. You can no longer pinpoint its position and you attempt to flee from the planet.'
      },
      rewards: {
        success_fuel: 1,
        success_credit: 2,
        success_health: 0,
        failure_fuel: 0,
        failure_credit: 0,
        failure_health: -2,
      } 
    },
    {
      choice_description: 'You pull out your scanner and point it at the tree...what could it be?',
      roll_needed: 6,
      roll_type: 'science',
      result: {
        sucess: 'You read your scanner and see a invisible large humanoid shape looking at you from the tree. You scream and run into your ship and take off before it can hunt you.',
        failure: 'You read your scanner but it seems to be malfunctioning. Theres no way theres an invisble large humanoid there. A huge explosion knocks you off your feet as the creature lets out a guttural roar. You run into your ship and attempt to take off before it can cause more damage!'
      },
      rewards: {
        success_fuel: 0,
        success_credit: 0,
        success_health: 0,
        failure_fuel: 0,
        failure_credit: 0,
        failure_health: -2,
      } }
    ]
  }
];
  

const fitnessFoods = [
    {
      name: "Grilled Chicken Breast (100g)",
      calories: 165,
      carbs: 0,
      fat: 3.6,
      protein: 31,
      imageLink: "https://www.jocooks.com/wp-content/uploads/2022/07/grilled-chicken-breast-1-21.jpg"
    },
    {
      name: "Quinoa (1 cup cooked)",
      calories: 222,
      carbs: 39,
      fat: 4,
      protein: 8,
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7zAloRp4JBnYOW75EwG6P_-Eui9bViXCc12uACrs2ctqKia3l8RX6lV3L1NuIimnoH8A&usqp=CAU"
    },
    {
      name: "Salmon (100g, baked)",
      calories: 206,
      carbs: 0,
      fat: 10,
      protein: 22,
      imageLink: "https://www.howsweeteats.com/wp-content/uploads/2023/01/sticky-garlic-butter-salmon-9.jpg"
    },
    {
      name: "Egg Whites (3 large)",
      calories: 51,
      carbs: 1,
      fat: 0,
      protein: 11,
      imageLink: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/10/eggs-cracked-shells-yokes-raw-1296x728-header.jpg?w=1155&h=1528"
    },
    {
      name: "Sweet Potato (1 medium, baked)",
      calories: 103,
      carbs: 24,
      fat: 0,
      protein: 2,
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5w6csyhV6e8QxEltsWwlytpg-PxiOzL5ExQ&usqp=CAU"
    },
    {
      name: "Broccoli (1 cup, chopped, boiled)",
      calories: 55,
      carbs: 11,
      fat: 0.6,
      protein: 4.3,
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-0p82eTSim6b09Prkswmy9_Wqlk4DUjXrA&usqp=CAU"
    },
    {
      name: "Brown Rice (1 cup, cooked)",
      calories: 216,
      carbs: 45,
      fat: 1.8,
      protein: 5,
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-QAYeQ5cnDxsMqBOU79MzQHqZ8NIDeSFjiQ&usqp=CAU"
    },
    {
      name: "Tuna (100g, canned in water)",
      calories: 116,
      carbs: 0,
      fat: 0.8,
      protein: 26,
      imageLink: "https://example.com/tuna.jpg"
    },
    {
      name: "Spinach (1 cup, boiled)",
      calories: 41,
      carbs: 7,
      fat: 0.5,
      protein: 5,
      imageLink: "https://example.com/spinach.jpg"
    },
    {
      name: "Cottage Cheese (1 cup, low-fat)",
      calories: 163,
      carbs: 6,
      fat: 2.3,
      protein: 28,
      imageLink: "https://example.com/cottage_cheese.jpg"
    },
    {
      name: "Almonds (1 ounce)",
      calories: 164,
      carbs: 6,
      fat: 14,
      protein: 6,
      imageLink: "https://example.com/almonds.jpg"
    },
    {
      name: "Oats (1/2 cup, dry)",
      calories: 154,
      carbs: 27,
      fat: 3.2,
      protein: 5.5,
      imageLink: "https://example.com/oats.jpg"
    },
    {
      name: "Greek Yogurt (1 cup, plain, non-fat)",
      calories: 133,
      carbs: 9,
      fat: 0,
      protein: 24,
      imageLink: "https://example.com/greek_yogurt.jpg"
    },
    {
      name: "Turkey Breast (100g, roasted)",
      calories: 135,
      carbs: 0,
      fat: 1,
      protein: 30,
      imageLink: "https://example.com/turkey_breast.jpg"
    },
    {
      name: "Lentils (1 cup, cooked)",
      calories: 230,
      carbs: 40,
      fat: 0.8,
      protein: 18,
      imageLink: "https://example.com/lentils.jpg"
    },
    {
      name: "Banana (1 medium)",
      calories: 105,
      carbs: 27,
      fat: 0.4,
      protein: 1.3,
      imageLink: "https://example.com/banana.jpg"
    },
    {
      name: "Avocado (1/2 fruit)",
      calories: 161,
      carbs: 9,
      fat: 15,
      protein: 2,
      imageLink: "https://example.com/avocado.jpg"
    },
    {
      name: "Milk (1 cup, skim)",
      calories: 83,
      carbs: 12,
      fat: 0.2,
      protein: 8,
      imageLink: "https://example.com/milk.jpg"
    },
    {
      name: "Green Beans (1 cup, boiled)",
      calories: 31,
      carbs: 7,
      fat: 0.1,
      protein: 2,
      imageLink: "https://example.com/green_beans.jpg"
    },
    {
      name: "Whey Protein Powder (1 scoop)",
      calories: 120,
      carbs: 3,
      fat: 1,
      protein: 24,
      imageLink: "https://example.com/whey_protein.jpg"
    },
    {
      name: "Cauliflower (1 cup, chopped, boiled)",
      calories: 28,
      carbs: 5,
      fat: 0.3,
      protein: 2,
      imageLink: "https://example.com/cauliflower.jpg"
    },
    {
      name: "Peanut Butter (2 tablespoons)",
      calories: 191,
      carbs: 7,
      fat: 16,
      protein: 7,
      imageLink: "https://example.com/peanut_butter.jpg"
    },
    {
      name: "Blueberries (1 cup)",
      calories: 84,
      carbs: 21,
      fat: 0.5,
      protein: 1,
      imageLink: "https://example.com/blueberries.jpg"
    },
    {
      name: "Beef (100g, lean, grilled)",
      calories: 250,
      carbs: 0,
      fat: 15,
      protein: 27,
      imageLink: "https://example.com/beef.jpg"
    },
    {
      name: "Whole Wheat Bread (1 slice)",
      calories: 69,
      carbs: 12,
      fat: 1,
      protein: 3,
      imageLink: "https://example.com/whole_wheat_bread.jpg"
    },
    {
      name: "Canned Chickpeas (1 cup)",
      calories: 269,
      carbs: 45,
      fat: 4.2,
      protein: 14.5,
      imageLink: "https://example.com/chickpeas.jpg"
    },
    {
      name: "Raspberries (1 cup)",
      calories: 64,
      carbs: 15,
      fat: 0.8,
      protein: 1.5,
      imageLink: "https://example.com/raspberries.jpg"
    },
    {
      name: "Tofu (1/2 cup, firm)",
      calories: 94,
      carbs: 2,
      fat: 5.5,
      protein: 10,
      imageLink: "https://example.com/tofu.jpg"
    },
    {
      name: "Pumpkin Seeds (1 ounce)",
      calories: 151,
      carbs: 5,
      fat: 13,
      protein: 7,
      imageLink: "https://example.com/pumpkin_seeds.jpg"
    },
    {
      name: "Cottage Cheese (1/2 cup, low-fat)",
      calories: 81,
      carbs: 3,
      fat: 1.3,
      protein: 14,
      imageLink: "https://example.com/cottage_cheese_low_fat.jpg"
    }
  ];
  const nutritionFoods = document.querySelector('.nutrition-foods');
  nutritionFoods.style.border = '1px solid black';
  nutritionFoods.style.width = '87%';
  nutritionFoods.style.margin = '30px 6.5%';
  nutritionFoods.style.height = 'max-content';
  
  for (let i = 0; i < fitnessFoods.length; i++) {
      let boxes = document.createElement('div');
      let name = document.createElement('h4');
      let calorie = document.createElement('p');
      let carbs = document.createElement('p');
      let fat = document.createElement('p');
      let protein = document.createElement('p');
    
      name.innerHTML = `${fitnessFoods[i].name}`
      calorie.innerHTML = `Calories : ${fitnessFoods[i].calories} gr`;
      carbs.innerHTML = `Carbs : ${fitnessFoods[i].carbs} gr`;
      fat.innerHTML = `Fat : ${fitnessFoods[i].fat} gr`;
      protein.innerHTML = `Protein : ${fitnessFoods[i].protein} gr`;
  
      boxes.style.backgroundImage = `url(${fitnessFoods[i].imageLink})`;
      boxes.style.backgroundSize = 'cover';
      boxes.style.backgroundPosition = 'center';
      boxes.style.backgroundRepeat = 'no-repeat';
      boxes.style.width = '30%';
      boxes.style.margin = '27px';
      boxes.style.height = '15rem';
      boxes.style.display = 'inline-block';
      boxes.style.padding = '20px';
      boxes.style.borderRadius = '8px';
      boxes.style.textAlign ='center'
      boxes.style.color = 'white'
      boxes.style.border = '1px solid black'
      boxes.style.fontSize = '20px'


      name.style.marginTop ='0.5rem'
      name.style.marginBottom ='1.5rem'
      name.style.padding = '10px 15px'
      name.style.backdropFilter = 'blur(2px)'
      calorie.style.backdropFilter = 'blur(2px)'
      carbs.style.backdropFilter = 'blur(2px)'
      fat.style.backdropFilter = 'blur(2px)'
      protein.style.backdropFilter = 'blur(2px)'

      boxes.addEventListener('mouseenter', function () {
          this.style.boxShadow = '0 0 10px 5px rgba(0, 0, 0, 0.5)';
      });
      boxes.addEventListener('mouseleave', function () {
          this.style.boxShadow = 'none';
      });
  
      boxes.appendChild(name);
      boxes.appendChild(calorie);
      boxes.appendChild(carbs);
      boxes.appendChild(fat);
      boxes.appendChild(protein);
      
      nutritionFoods.append(boxes);
  }
  
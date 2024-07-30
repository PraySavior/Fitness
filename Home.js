const fitnessNews = {
    nutrition: [
        {
            title: "New Study Finds Mediterranean Diet Reduces Risk of Heart Disease",
            content: "A recent study published in the American Journal of Clinical Nutrition has found that adhering to a Mediterranean diet can significantly reduce the risk of heart disease. The diet, rich in fruits, vegetables, whole grains, and healthy fats such as olive oil and nuts, has long been associated with various health benefits, including improved heart health.",
            imageLink: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Protein-Rich Breakfasts Linked to Weight Loss, Study Suggests",
            content: "According to a new study published in the Journal of Nutrition, starting the day with a protein-rich breakfast may aid in weight loss efforts. Researchers found that participants who consumed a breakfast high in protein experienced greater feelings of fullness and consumed fewer calories throughout the day compared to those who ate a lower protein breakfast.",
            imageLink: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ],
    workouts: [
        {
            title: "New Fitness Trend: Virtual Reality Workouts Gain Popularity",
            content: "As technology continues to evolve, virtual reality (VR) workouts are gaining traction among fitness enthusiasts. With VR headsets and immersive fitness apps, users can experience engaging and interactive workouts from the comfort of their homes. From virtual cycling to boxing simulations, these innovative workouts offer a new way to stay active and motivated.",
            imageLink: "https://plus.unsplash.com/premium_photo-1663091778490-01fd3adf115e?q=80&w=1464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Study Finds Benefits of Outdoor Exercise for Mental Well-being",
            content: "Research conducted by the University of Exeter suggests that outdoor exercise may have significant benefits for mental well-being. The study found that participants who engaged in outdoor activities such as running, cycling, or walking in natural environments reported lower levels of stress, anxiety, and depression compared to those who exercised indoors.",
            imageLink: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ],
    motivation: [
        {
            title: "Inspiring Success Story: Former Couch Potato Completes First Marathon",
            content: "After years of leading a sedentary lifestyle, John Smith defied the odds and completed his first marathon this past weekend. With determination and perseverance, John transformed his health and fitness by gradually incorporating regular exercise and healthy eating habits into his daily routine. His inspiring journey serves as a reminder that it's never too late to pursue your fitness goals.",
            imageLink: "https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?q=80&w=1564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Fitness Influencer Shares Top Tips for Staying Motivated",
            content: "In a recent interview, renowned fitness influencer Sarah Johnson revealed her top tips for staying motivated and consistent with exercise. Sarah emphasized the importance of setting realistic goals, finding activities you enjoy, and surrounding yourself with a supportive community. By focusing on progress rather than perfection, Sarah believes anyone can achieve their fitness aspirations.",
            imageLink: "https://plus.unsplash.com/premium_photo-1670505062610-b9041ebe603c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
};
let keys = Object.keys(fitnessNews);
let section2 = document.querySelector('.section-2');

for (let i = 0; i < keys.length; i++) {
    let mainBox = document.createElement('div');
    mainBox.style.width = '75%';
    mainBox.style.margin = '0 auto'
    
    // Get the object corresponding to the current key
    let currentObject = fitnessNews[keys[i]];
    
    for (let j = 0; j < currentObject.length; j++) {
        let left1 = document.createElement('div')
        left1.style.padding = '1rem'
        left1.style.width = '40%'
        let right1 = document.createElement('div')
        right1.style.padding = '1rem'
        right1.style.width = '30%'
        right1.style.height = '100%'
        let box = document.createElement('div');
        box.style.width = '90%'
        box.style.display = 'flex'
        box.style.backgroundColor = '#052D37'
        box.style.marginBottom = '2rem'
        box.style.justifyContent = 'space-evenly'
        box.style.backgroundSize = "cover"
        box.style.backgroundPosition = "center";
        box.style.backgroundRepeat = "no-repeat";
        box.style.backgroundImage = `url(${currentObject[j].imageLink})`
        box.addEventListener('mouseenter', () => box.style.boxShadow = '0 0 10px 5px rgba(0, 0, 0, 0.5)') ;;
        box.addEventListener('mouseleave', () => box.style.boxShadow = 'none');
        box.style.borderRadius ='0.5rem'
        let highlight = document.createElement('h2');
        highlight.style.padding = '1rem'
        highlight.style.color = 'white'
        highlight.style.backgroundColor = '#267B8C'
        box.addEventListener('mouseenter', () => highlight.style.color = '#E5C58F') ;;
        box.addEventListener('mouseleave', () => highlight.style.color = 'white');
        let content = document.createElement('p');
        content.style.padding = '1rem'
        content.style.backgroundColor = '#1A5A67'
        content.style.marginTop = '20px'
        let image = document.createElement('img')
        image.style.width = "100%"
        highlight.innerHTML = currentObject[j].title;
        content.innerHTML = currentObject[j].content
        content.style.color = 'white'
        image.src = `${currentObject[j].imageLink}`
        

        
        left1.appendChild(highlight)
        left1.appendChild(content)
        // right1.appendChild(image)
        box.appendChild(left1)
        box.appendChild(right1)
        mainBox.appendChild(box)
        section2.append(mainBox)
    }
}

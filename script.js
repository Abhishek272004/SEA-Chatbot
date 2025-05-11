// Mobile Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Chatbot Logic
const knowledgeBase = {
    about: {
        response: `
            <strong>About SEA College of Engineering and Technology (SEACET)</strong><br>
            Established in 2007 under the South East Asian Education Trust (SEAET) by Founder Chairman Sri A. Krishnappa, SEACET is a premier institution in Bangalore, India. Approved by AICTE and affiliated with Visvesvaraya Technological University (VTU), Belagavi, SEACET blends modern engineering education with Indian cultural values.<br>
            <ul class="list-disc ml-5">
                <li><strong>Vision:</strong> Empower students through innovative education and research.</li>
                <li><strong>Mission:</strong> Foster academic excellence and holistic development.</li>
                <li><strong>Campus:</strong> 50-acre modern campus with state-of-the-art facilities.</li>
                <li><strong>Programs:</strong> Started with CSE, ECE, ISE, and Mechanical; MBA added in 2008, Civil in 2009.</li>
                <li><strong>Current Intake:</strong> 567 students per annum (UG, PG, and Research).</li>
                <li><strong>Approval:</strong> AICTE, Government of Karnataka.</li>
            </ul>
        `,
        suggestions: ["Founder details", "Courses offered", "Campus facilities", "Board of Management"]
    },
    founder: {
        response: `
            <strong>Founder – Sri A. Krishnappa</strong><br>
            Sri A. Krishnappa, a visionary leader, founded SEAET in 2000 to provide quality education to all. He established SEACET in 2007 to promote technical and professional excellence.<br>
            <ul class="list-disc ml-5">
                <li>Started in education in 1972 with Sri Venugopalswamy Educational Trust.</li>
                <li>Founded SEAET in 2000 and SEACET in 2007.</li>
                <li>Promoted discipline, innovation, and inclusive education.</li>
                <li><em>"Arise! Awake! And Stop Not Till The Goal Is Reached."</em></li>
            </ul>
        `,
        suggestions: ["About SEACET", "Board of Management", "Principal's message"]
    },
    boardOfManagement: {
        response: `
            <strong>Board of Management</strong><br>
            The Board of Management at SEACET oversees strategic planning, academics, and quality standards under SEAET.<br>
            <ul class="list-disc ml-5">
                <li><strong>Chairman:</strong> Shri A. Krishnappa (Founder, Late).</li>
                <li><strong>Managing Trustee:</strong> Shri A. Harsha.</li>
                <li><strong>Executive Directors:</strong> Manage academics, infrastructure, and administration.</li>
                <li>Committed to student welfare and institutional growth.</li>
            </ul>
        `,
        suggestions: ["Principal's message", "About SEACET", "Courses offered"]
    },
    principal: {
        response: `
            <strong>Principal's Message – Dr. B. Venkata Narayana </strong><br>
            Welcome to SEACET, where we nurture competent, ethically grounded professionals. Our qualified faculty and vibrant co-curricular activities ensure holistic development.<br>
            <em>“Together, let’s build a future where knowledge meets purpose.”</em><br>
            – <strong>Dr. D. Raghavendra, Ph.D.</strong>
        `,
        suggestions: ["About SEACET", "Board of Management", "Campus facilities"]
    },
    contact: {
        response: `
            <strong>Contact & Location</strong><br>
            <ul class="list-disc ml-5">
                <li><strong>Address:</strong> Virgonagar Post, K.R. Puram, Bangalore – 560049, Karnataka, India.</li>
                <li><strong>Phone:</strong> +91-80-2561 8364 / 65.</li>
                <li><strong>Email:</strong> seacetprincipal@gmail.com.</li>
                <li><strong>Campus:</strong> 2 km from K.R. Puram on Old Madras Road (NH-4).</li>
                <li><strong>Facilities:</strong> Classrooms, labs, library, hostels, sports complex, transport.</li>
            </ul>
        `,
        suggestions: ["How to reach SEACET", "Hostel details", "Placement office"]
    },
    courses: {
        response: `
            <strong>Courses Offered</strong><br>
            SEACET offers a variety of programs:<br>
            <ul class="list-disc ml-5">
                <li><strong>B.E.:</strong> Computer Science & Engineering, Electronics & Communication, Information Science, Mechanical, Civil, AI & Machine Learning, Agricultural Engineering.</li>
                <li><strong>M.Tech:</strong> VLSI Design & Embedded Systems, Computer Science, Structural Engineering.</li>
                <li><strong>MBA:</strong> Finance, Marketing, HR.</li>
                <li><strong>Ph.D.:</strong> Mechanical, Civil, Physics, Chemistry, MBA, Mathematics.</li>
            </ul>
        `,
        suggestions: ["Admission process", "Course eligibility", "Placements"]
    },
    admission: {
        response: `
            <strong>Admission Process</strong><br>
            <ul class="list-disc ml-5">
                <li><strong>Eligibility:</strong> 10+2 with PCM for B.E.; relevant degree for PG.</li>
                <li><strong>Entrance Exams:</strong> KCET, COMEDK for B.E.; PGCET, CAT for PG.</li>
                <li><strong>Application:</strong> Apply online via the college website.</li>
            </ul>
        `,
        suggestions: ["Documents required", "Admission deadlines", "Fee structure"]
    },
    faculty: {
        response: `
            <strong>Faculty Information</strong><br>
            SEACET’s faculty comprises experienced educators and industry experts.<br>
            <ul class="list-disc ml-5">
                <li>Dr. John Doe: PhD in AI, 20+ years of experience.</li>
                <li>Prof. Jane Smith: Expert in Structural Engineering.</li>
            </ul>
        `,
        suggestions: ["Research areas", "Faculty achievements", "About SEACET"]
    },
    facilities: {
        response: `
            <strong>Campus and Facilities</strong><br>
            <ul class="list-disc ml-5">
                <li>Advanced labs for all departments.</li>
                <li>Hostels with modern amenities.</li>
                <li>Library with 50,000+ books and digital resources.</li>
                <li>Sports complex and transportation services.</li>
            </ul>
        `,
        suggestions: ["Campus tour", "Hostel details", "Sports facilities"]
    },
    placements: {
        response: `
            <strong>Placements and Recruiters</strong><br>
            SEACET has a strong placement record.<br>
            <ul class="list-disc ml-5">
                <li><strong>Top Recruiters:</strong> TCS, Infosys, Wipro, Accenture.</li>
                <li><strong>Placement Rate:</strong> 85%+ for eligible students.</li>
            </ul>
        `,
        suggestions: ["Placement process", "Internships", "Alumni success"]
    },
    research: {
        response: `
            <strong>Research Areas</strong><br>
            <ul class="list-disc ml-5">
                <li>AI and Machine Learning.</li>
                <li>Renewable Energy Systems.</li>
                <li>Smart Materials.</li>
            </ul>
        `,
        suggestions: ["Research projects", "Industry collaborations", "Publications"]
    },
    greetings: {
        response: `
            <strong>Hello!</strong><br>
            Welcome to SEA College of Engineering & Technology!<br>
            How can I assist you today? You can ask about courses, admissions, facilities, and more.
        `,
        suggestions: ["Tell me about the college", "What courses are offered?", "How to apply for admission?"]
    }
};

const spellingCorrections = {
    'teh': 'the',
    'adress': 'address',
    'collage': 'college',
    'engeneering': 'engineering'
};

const sentencePredictions = {
    'what courses': ['What courses are offered at SEACET?', 'What courses are available for undergraduates?'],
    'how to apply': ['How to apply for admission?', 'How to apply for B.E. programs?'],
    'placement': ['What is the placement record?', 'Which companies recruit at SEACET?']
};

// Initialize Chatbot with Welcome Message
document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'chat-message bot-message';
    welcomeMessage.innerHTML = `
        Welcome to SEA College of Engineering & Technology!<br>
        I'm here to help with information about our courses, admissions, facilities, and more.<br>
        Try asking: "What courses are offered?" or "Tell me about the college."
    `;
    chatMessages.appendChild(welcomeMessage);
});

// Toggle Chatbot
document.getElementById('chatbot-toggle').addEventListener('click', () => {
    const container = document.getElementById('chatbot-container');
    if (container) {
        container.classList.toggle('open');
        console.log('Chatbot toggled:', container.classList.contains('open') ? 'Opened' : 'Closed');
    } else {
        console.error('Chatbot container not found');
    }
});

document.getElementById('close-chatbot').addEventListener('click', () => {
    const container = document.getElementById('chatbot-container');
    if (container) {
        container.classList.remove('open');
        console.log('Chatbot closed');
    } else {
        console.error('Chatbot container not found');
    }
});

// Handle User Input
document.getElementById('chat-input').addEventListener('input', (e) => {
    const input = e.target.value.toLowerCase().trim();
    const suggestionsDiv = document.getElementById('suggestions');
    
    // Spelling Correction
    let correctedInput = input;
    Object.keys(spellingCorrections).forEach((wrong) => {
        correctedInput = correctedInput.replace(new RegExp(`\\b${wrong}\\b`, 'gi'), spellingCorrections[wrong]);
    });
    
    // Sentence Prediction
    suggestionsDiv.innerHTML = '';
    suggestionsDiv.classList.add('hidden');
    Object.keys(sentencePredictions).forEach((key) => {
        if (input.includes(key)) {
            suggestionsDiv.classList.remove('hidden');
            sentencePredictions[key].forEach((suggestion) => {
                const div = document.createElement('div');
                div.className = 'p-2 hover:bg-gray-100 cursor-pointer';
                div.textContent = suggestion;
                div.addEventListener('click', () => {
                    document.getElementById('chat-input').value = suggestion;
                    suggestionsDiv.classList.add('hidden');
                    handleQuery(suggestion);
                });
                suggestionsDiv.appendChild(div);
            });
        }
    });
});

document.getElementById('chat-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
        handleQuery(e.target.value);
        e.target.value = '';
    }
});

// Handle Query
function handleQuery(query) {
    const chatMessages = document.getElementById('chat-messages');
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user-message';
    userMessage.textContent = query;
    chatMessages.appendChild(userMessage);

    const botMessage = document.createElement('div');
    botMessage.className = 'chat-message bot-message';
    
    const normalizedQuery = query.toLowerCase();
    let response = 'Sorry, I didn’t understand your query. Please try again or ask about courses, admissions, or facilities!';
    let suggestions = [];

    // Match query to knowledge base
    if (normalizedQuery.includes('hi') || normalizedQuery.includes('hello') || normalizedQuery.includes('hey')) {
        response = knowledgeBase.greetings.response;
        suggestions = knowledgeBase.greetings.suggestions;
    } else if (normalizedQuery.includes('about') || normalizedQuery.includes('college')) {
        response = knowledgeBase.about.response;
        suggestions = knowledgeBase.about.suggestions;
    } else if (normalizedQuery.includes('founder') || normalizedQuery.includes('krishnappa')) {
        response = knowledgeBase.founder.response;
        suggestions = knowledgeBase.founder.suggestions;
    } else if (normalizedQuery.includes('board') || normalizedQuery.includes('management')) {
        response = knowledgeBase.boardOfManagement.response;
        suggestions = knowledgeBase.boardOfManagement.suggestions;
    } else if (normalizedQuery.includes('principal') || normalizedQuery.includes('raghavendra')) {
        response = knowledgeBase.principal.response;
        suggestions = knowledgeBase.principal.suggestions;
    } else if (normalizedQuery.includes('contact') || normalizedQuery.includes('address') || normalizedQuery.includes('location')) {
        response = knowledgeBase.contact.response;
        suggestions = knowledgeBase.contact.suggestions;
    } else if (normalizedQuery.includes('course') || normalizedQuery.includes('program')) {
        response = knowledgeBase.courses.response;
        suggestions = knowledgeBase.courses.suggestions;
    } else if (normalizedQuery.includes('admission') || normalizedQuery.includes('apply')) {
        response = knowledgeBase.admission.response;
        suggestions = knowledgeBase.admission.suggestions;
    } else if (normalizedQuery.includes('faculty') || normalizedQuery.includes('professor')) {
        response = knowledgeBase.faculty.response;
        suggestions = knowledgeBase.faculty.suggestions;
    } else if (normalizedQuery.includes('facilit') || normalizedQuery.includes('campus')) {
        response = knowledgeBase.facilities.response;
        suggestions = knowledgeBase.facilities.suggestions;
    } else if (normalizedQuery.includes('placement') || normalizedQuery.includes('recruit')) {
        response = knowledgeBase.placements.response;
        suggestions = knowledgeBase.placements.suggestions;
    } else if (normalizedQuery.includes('research') || normalizedQuery.includes('project')) {
        response = knowledgeBase.research.response;
        suggestions = knowledgeBase.research.suggestions;
    }

    botMessage.innerHTML = response + '<br><strong>Was this helpful?</strong> <button class="text-blue-500 hover:underline" onclick="addFeedback(true)">Yes</button> / <button class="text-blue-500 hover:underline" onclick="addFeedback(false)">No</button>';
    chatMessages.appendChild(botMessage);

    // Add suggestion chips
    const suggestionChips = document.getElementById('suggestion-chips');
    suggestionChips.innerHTML = '';
    suggestions.forEach((suggestion) => {
        const chip = document.createElement('div');
        chip.className = 'suggestion-chip';
        chip.textContent = suggestion;
        chip.addEventListener('click', () => handleQuery(suggestion));
        suggestionChips.appendChild(chip);
    });

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Feedback
function addFeedback(isHelpful) {
    const chatMessages = document.getElementById('chat-messages');
    const feedbackMessage = document.createElement('div');
    feedbackMessage.className = 'chat-message bot-message';
    feedbackMessage.textContent = isHelpful ? 'Thank you for your feedback!' : 'Sorry, let me help you better. Please try another query!';
    chatMessages.appendChild(feedbackMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
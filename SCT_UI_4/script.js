// Screen navigation
let currentScreen = 0;
const screens = ['welcome', 'onboarding', 'profile', 'goals', 'completion'];

function showScreen(screenIndex) {
    screens.forEach((screenId, index) => {
        const screen = document.getElementById(screenId);
        if (index === screenIndex) {
            screen.classList.add('active');
        } else {
            screen.classList.remove('active');
        }
    });
    currentScreen = screenIndex;
    updateProgress();
}

function nextScreen() {
    if (currentScreen < screens.length - 1) {
        showScreen(currentScreen + 1);
    }
}

// Progress bar update
function updateProgress() {
    const progress = document.querySelector('.progress');
    const progressPercent = ((currentScreen + 1) / screens.length) * 100;
    progress.style.width = progressPercent + '%';
}

// Form validation
function validateProfileForm() {
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value;

    if (!name) {
        alert('Please enter your full name.');
        return false;
    }

    if (!age || age < 13 || age > 120) {
        alert('Please enter a valid age between 13 and 120.');
        return false;
    }

    return true;
}

// Goal selection
let selectedGoal = null;

function selectGoal(goalElement) {
    // Remove selected class from all goals
    document.querySelectorAll('.goal-option').forEach(option => {
        option.classList.remove('selected');
    });

    // Add selected class to clicked goal
    goalElement.classList.add('selected');
    selectedGoal = goalElement.dataset.goal;
}

// Update completion summary
function updateSummary() {
    const name = document.getElementById('name').value.trim() || 'Not provided';
    const goal = selectedGoal ? selectedGoal.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Not selected';
    const activity = document.getElementById('activity').value || 'Not provided';

    document.getElementById('summary-name').textContent = name;
    document.getElementById('summary-goal').textContent = goal;
    document.getElementById('summary-activity').textContent = activity;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Welcome screen
    document.querySelector('#welcome .btn-primary').addEventListener('click', nextScreen);

    // Onboarding screen
    document.querySelector('#onboarding .btn-primary').addEventListener('click', nextScreen);

    // Profile screen
    document.querySelector('#profile .btn-primary').addEventListener('click', function() {
        if (validateProfileForm()) {
            nextScreen();
        }
    });

    document.querySelector('#profile .btn-secondary').addEventListener('click', nextScreen);

    // Goals screen
    document.querySelectorAll('.goal-option').forEach(option => {
        option.addEventListener('click', function() {
            selectGoal(this);
        });
    });

    document.querySelector('#goals .btn-primary').addEventListener('click', function() {
        if (selectedGoal) {
            updateSummary();
            nextScreen();
        } else {
            alert('Please select a fitness goal.');
        }
    });

    // Completion screen
    document.querySelector('#completion .btn-primary').addEventListener('click', function() {
        alert('Welcome to FitLife! Your fitness journey begins now.\n\nIn a production app, this would navigate to the main dashboard.');
        // In a real app, this would navigate to the main app
        // window.location.href = '/dashboard';
    });

    // Initialize
    showScreen(0);
});

$(document).ready(function () {
    
    $('#quiz-slider').slick({
        infinite: false,
        arrows: true,
        touchMove: false,
        swipe: false,
        draggable: false,
        adaptiveHeight: true,
        prevArrow: $('.prevArrow'),
        nextArrow: $('.nextArrow'),
        dots: false
    });

    var answers = {
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
    }

    var matches = [];

    const therapists = {
        kaleeGower: {
            q1: ['individual', 'couples', 'family', 'group'],
            q2: ['anxietyDepression', 'angerAggression', 'lifeTransitions', 'perfectionism', 'eatingDisorders', 'health', 'relationship', 'lgbtqia', 'studentConcerns', 'other'],
            q3: ['inPerson', 'telehealth', 'noPref'],
            q4: ['female', 'noPref', 'nonBinary'],
            q5: ['youngAdult', 'adult', 'senior'],
            info: {
                name: 'Kalee Gower',
                title: 'LCSW - Clinical Director',
                link: '/kalee-gower/',
                image: 'https://uploads-ssl.webflow.com/6331c98293c88392fa71043c/635bfefd2b75b334ecedb10e_Kalee%201.webp'
            }
        },
        robbiePrice: {
            q1: ['individual', 'couples', 'adolescent', 'group'],
            q2: ['anxietyDepression', 'angerAggression', 'trauma', 'eatingDisorders', 'autismSpectrum', 'health', 'relationship', 'studentConcerns', 'other', 'mensIssues'],
            q3: ['inPerson', 'telehealth', 'noPref'],
            q4: ['male', 'noPref'],
            q5: ['adolescent', 'youngAdult', 'adult', 'senior'],
            info: {
                name: 'Robbie Price',
                title: 'LPC - Senior Associate',
                link: '/robbie-price/',
                image: 'https://uploads-ssl.webflow.com/6331c98293c88392fa71043c/635bfefddb42af12f2981e1d_Robbie%201.webp'
            }
        },
        louisLaves: {
            q1: ['individual', 'couples', 'family', 'adolescent'],
            q2: ['addictions', 'anxietyDepression', 'trauma', 'studentConcerns', 'eatingDisorders', 'autismSpectrum', 'health', 'relationship', 'lgbtqia', 'other', 'mensIssues'],
            q3: ['inPerson', 'telehealth', 'noPref'],
            q4: ['male', 'noPref', 'nonBinary'],
            q5: ['adolescent', 'youngAdult', 'adult', 'senior'],
            info: {
                name: 'Louis Laves-Webb',
                title: 'LCSW - LPC-S - Psychotherapist',
                link: '/louis-laves-webb/',
                image: 'https://uploads-ssl.webflow.com/6331c98293c88392fa71043c/635bfefdddd0504899950aa0_Louis%201.webp'
            }
        },
        jenniferCarley: {
            q1: ['individual', 'couples', 'adolescent'],
            q2: ['anxietyDepression', 'trauma', 'lifeTransitions', 'eatingDisorders', 'autismSpectrum', 'health', 'relationship', 'studentConcerns', 'lgbtqia', 'other'],
            q3: ['inPerson', 'telehealth', 'noPref'],
            q4: ['female', 'noPref'],
            q5: ['adolescent', 'youngAdult', 'adult'],
            info: {
                name: 'Jennifer Carley',
                title: 'LMSW',
                link: '/jennifer-carley/',
                image: 'https://uploads-ssl.webflow.com/6331c98293c88392fa71043c/653af56a87292b830dbef744_Jennifer%20headshot%202.jpeg'
            }
        },
        anielaBaczewski: {
            q1: ['individual', 'couples'],
            q2: ['addictions', 'anxietyDepression', 'trauma', 'lifeTransitions', 'autismSpectrum', 'health', 'relationship', 'studentConcerns', 'lgbtqia', 'other'],
            q3: ['inPerson', 'telehealth', 'noPref'],
            q4: ['female', 'noPref'],
            q5: ['youngAdult', 'adult', 'senior'],
            info: {
                name: 'Aniela Baczewski',
                title: 'LPC – Associate',
                link: '/aniela-baczewski/',
                image: 'https://uploads-ssl.webflow.com/6331c98293c88392fa71043c/635bfefd1ecef783e8a948ca_Aniela%201.webp'
            }
        },
        susanMiller: {
            q1: ['individual', 'couples', 'family', 'group'],
            q2: ['anxietyDepression', 'trauma', 'lifeTransitions', 'health', 'relationship', 'studentConcerns', 'other'],
            q3: ['inPerson', 'telehealth', 'noPref'],
            q4: ['female', 'noPref'],
            q5: ['youngAdult', 'adult', 'senior'],
            info: {
                name: 'Susan Miller',
                title: 'LPC-Associate',
                link: '/susan-miller/',
                image: 'https://assets.website-files.com/6331c98293c88392fa71043c/633daa22344f3668c17009f6_SusanMiller1.jpeg'
            }
        },
        emilyDobrowski: {
            q1: ['individual', 'couples', 'adolescent',],
            q2: ['addictions', 'anxietyDepression', 'trauma', 'lifeTransitions', 'health', 'relationship', 'studentConcerns', 'other'],
            q3: ['inPerson', 'telehealth', 'noPref'],
            q4: ['female', 'noPref', 'nonBinary'],
            q5: ['adolescent', 'youngAdult', 'adult'],
            info: {
                name: 'Emily Dobrowski',
                title: 'LCSW - Senior Associate',
                link: '/emily-dobrowski/',
                image: 'https://uploads-ssl.webflow.com/6331c98293c88392fa71043c/635bfefdec00eddb39c5d242_Emily%20D%201.webp'
            }
        },
        emilyCheney: {
            q1: ['individual', 'couples', 'group'],
            q2: ['anxietyDepression', 'lifeTransitions', 'relationship', 'parenting', 'studentConcerns', 'trauma'],
            q3: ['telehealth', 'noPref'],
            q4: ['female', 'noPref', 'nonBinary'],
            q5: ['youngAdult', 'adult'],
            info: {
                name: 'Emily Harrington-Cheney',
                title: 'LCSW, LPC - Senior Associate',
                link: '/emily-harrington-cheney/',
                image: 'https://uploads-ssl.webflow.com/6331c98293c88392fa71043c/641c50e0038d63895a3d06b8_Emily%20HC.webp'
            }
        },
        kimMasoni: {
            q1: ['individual', 'couples', 'adolescent', 'group'],
            q2: ['anxietyDepression', 'trauma', 'relationship', 'lifeTransitions', 'studentConcerns', 'eatingDisorders', 'lgbtqia', 'other'],
            q3: ['telehealth', 'noPref'],
            q4: ['male', 'female', 'noPref', 'nonBinary'],
            q5: ['adolescent', 'youngAdult', 'adult', 'senior'],
            info: {
                name: 'Kim Masoni',
                title: 'LPC-Associate',
                link: '/kim-masoni/',
                image: 'https://uploads-ssl.webflow.com/6331c98293c88392fa71043c/635bfefdf7bda80882c79881_Kim%201.webp'
            }
        },
        carolynMiles: {
            q1: ['individual', 'couples', 'group'],
            q2: ['anxietyDepression', 'trauma', 'relationship', 'studentConcerns', 'lifeTransitions', 'health', 'other'],
            q3: ['telehealth', 'noPref'],
            q4: ['male', 'female', 'noPref', 'nonBinary'],
            q5: ['youngAdult', 'adult', 'senior'],
            info: {
                name: 'Carolyn Miles',
                title: 'LMSW',
                link: '/carolyn-miles/',
                image: 'https://uploads-ssl.webflow.com/6331c98293c88392fa71043c/635bfefde44c82d78604f70f_Carolyn%201.webp'
            }
        },
        nickMamey: {
            q1: ['individual', 'couples'],
            q2: ['anxietyDepression', 'adhd', 'relationship', 'lifeTransitions', 'studentConcerns', 'mensIssues', 'other', 'spirituality', 'mensIssues'],
            q3: ['inPerson', 'telehealth', 'noPref'],
            q4: ['male', 'female', 'noPref', 'nonBinary'],
            q5: ['youngAdult', 'adult', 'senior'],
            info: {
                name: 'Nick Mamey',
                title: 'LCSW, LPC-S',
                link: '/nicholas-mamey/',
                image: 'https://assets.website-files.com/6331c98293c88392fa71043c/64d3e5b2b70df372b07048b9_rsz_1nicholasngmtherapy---5x7-p-500.jpg'
            }
        }

    }

    function calcTherapists() {

        // Clear prior matches
        matches = [];

        // Loop through each therapist and determine if current answers match therapist's parameters
        for (var therapist in therapists) {
            var q1match = therapists[therapist]['q1'].includes(answers['q1']);
            var q2match = therapists[therapist]['q2'].includes(answers['q2']);
            var q3match = therapists[therapist]['q3'].includes(answers['q3']);
            var q4match = therapists[therapist]['q4'].includes(answers['q4']);
            var q5match = therapists[therapist]['q5'].includes(answers['q5']);

            // If this therapist has all answers within their paramters, push them to the results array
            if (q1match && q2match && q3match && q4match && q5match) {
                matches.push(therapist);
            }
        }

        // If there are any matches in the match array, clear the .therapist-results element and generate a column for each one in the array
        if (matches[0]) {

            // Clear Results element
            $('.therapist-results').html('');

            // Loop through matched therapists
            matches.forEach(function (therapist) {

                // Append this markup to the results element for each found therapist to the results array
                var thisTherapist = therapists[therapist];
                $('.therapist-results').append(`
                    <div class="therapist-col">
                        <div class="therapist-card">
                            <div class="therapist-img-wrapper">
                                <img src="${thisTherapist['info']['image']}">
                            </div>
                            <h4 class="therapist-name">${thisTherapist['info']['name']}</h4>
                            <p class="therapist-title">${thisTherapist['info']['title']}</p>
                            <div class="gps-button-wrapper">
                                <a class="llw-bttn w-button" href="${thisTherapist['info']['link']}" target="_blank">More About ${thisTherapist['info']['name'].split(' ')[0]}</a>
                            </div>
                        </div>
                    </div>
                `);
            });

            // Show results element
            $('.results-slide > div.active').removeClass('active');
            $('.has-results').addClass('active');
        } else {
            // Show no results element
            $('.results-slide > div.active').removeClass('active');
            $('.no-results').addClass('active');
        }
    }

    $('#quiz-slider a[href="#"]').click(function (e) {
        e.preventDefault;
    });

    $('.quiz-buttons button').click(function () {
        var thisBtn = $(this);
        switch (thisBtn.data('question')) {
            case 'typeOfTherapy':
                $('.question-1 .active').removeClass('active');
                thisBtn.addClass('active');
                answers.q1 = thisBtn.data('answer');
                calcTherapists();
                break;
            case 'specialty':
                $('.question-2 .active').removeClass('active');
                thisBtn.addClass('active');
                answers.q2 = thisBtn.data('answer');
                calcTherapists();
                break;
            case 'method':
                $('.question-3 .active').removeClass('active');
                thisBtn.addClass('active');
                answers.q3 = thisBtn.data('answer');
                calcTherapists();
                break;
            case 'therapistGender':
                $('.question-4 .active').removeClass('active');
                thisBtn.addClass('active');
                answers.q4 = thisBtn.data('answer');
                calcTherapists();
                break;
            case 'yourAge':
                $('.question-5 .active').removeClass('active');
                thisBtn.addClass('active');
                answers.q5 = thisBtn.data('answer');
                calcTherapists();
                break;
            default: null
        }
    });

    $(window).scroll(function(){
        $('#quiz-slider').slick('resize');
    });

    // Restart button
    $('#quiz-slider .restart').click(function () {
        answers = {
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            q5: ''
        }
        matches = [];
        $('.quiz-buttons .active').removeClass('active');
        $('#quiz-slider').slick('slickGoTo', 0);
    });

});

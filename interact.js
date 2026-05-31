console.log("JS STARTED");

    let pvState = [1, 0, 8, 5, 4]
                /* Chapter Rendering JS */
        let card = document.querySelector(".course-card");
        let course =
            document.querySelector(".course-grid");

            if(course){

                course.addEventListener(
                "click",(e)=>{

                    if(
                    e.target.closest(
                    ".course-card"
                    )
                    ){

                        renderChapters();

                    }

                });

            }
                let chapters = document.querySelector(".chapters");
                let title = document.querySelector(".course-title h1");

                function renderChapters() {
                    course.innerHTML = "";
                    title.innerHTML = "Chapters";

                    let chapterList = [
                        {
                            title: "Knowing Our Numbers",
                            img: "Images/knowing_numbers.svg",
                            desc: "Explore large numbers, place value systems, estimation, and Roman numerals.",
                            time: "45 mins",
                            progress: 0,

                            lessonId: ["KON1", "KON2", "KON3", "KON4"]
                        },
                        {
                            title: "Whole Numbers",
                            img: "Images/whole_numbers.svg",
                            desc: "Understand natural and whole numbers, number line representation, and properties of operations.",
                            time: "35 mins",
                            progress: 0,

                            lessonId: "WN1"
                        },
                        {
                            title: "Playing with Numbers",
                            img: "Images/playing_numbers.svg",
                            desc: "Learn factors, multiples, prime & composite numbers, divisibility rules, HCF, and LCM.",
                            time: "60 mins",
                            progress: 0,

                            lessonId: "PWN1"
                        },
                        {
                            title: "Basic Geometrical Ideas",
                            img: "Images/basic_geometry.svg",
                            desc: "Discover lines, rays, curves, intersections, angles, triangles and circles.",
                            time: "40 mins",
                            progress: 0,

                            lessonId: "BGI1"
                        },
                        {
                            title: "Understanding Elementary Shapes",
                            img: "Images/elementary_shapes.svg",
                            desc: "Learn to measure line segments, angles, triangles, quadrilaterals, polygons, and 3D shapes.",
                            time: "50 mins",
                            progress: 0,

                            lessonId: "UES1"

                        },
                        {
                            title: "Integers",
                            img: "Images/integers.svg",
                            desc: "Step into positive and negative numbers, number lines, and operations on integers.",
                            time: "45 mins",
                            progress: 0,

                            lessonId: "INT1"
                        },
                        {
                            title: "Fractions",
                            img: "Images/fractions.svg",
                            desc: "Dive into proper, improper, mixed, and equivalent fractions, and basic operations.",
                            time: "55 mins",
                            progress: 0,
                        
                            lessonId: "FRAC1"

                        },
                        {
                            title: "Decimals",
                            img: "Images/decimals.svg",
                            desc: "Understand decimal place values, converting fractions to decimals, and operations.",
                            time: "40 mins",
                            progress: 0,
                            lessonId: "DEC1"
                        },
                        {
                            title: "Data Handling",
                            img: "Images/data_handling.svg",
                            desc: "Collect and organize data using tally marks, pictographs, and bar graphs.",
                            time: "30 mins",
                            progress: 0,
                            lessonId: "DH1"
                        },
                        {
                            title: "Mensuration",
                            img: "Images/mensuration.svg",
                            desc: "Calculate perimeter and area of regular shapes, rectangles, and squares.",
                            time: "50 mins",
                            progress: 0,
                            lessonId: "MENS1"
                        },
                        {
                            title: "Algebra",
                            img: "Images/algebra.svg",
                            desc: "Introduction to variables, forming algebraic expressions, and simple equations.",
                            time: "45 mins",
                            progress: 0,
                            lessonId: "ALG1"
                        },
                        {
                            title: "Ratio and Proportion",
                            img: "Images/ratio_proportion.svg",
                            desc: "Compare quantities using ratios, proportions, and the unitary method.",
                            time: "45 mins",
                            progress: 0,
                            lessonId: "RATIO1"
                        }
                    ];

                    chapterList.forEach(chapter => {
                        let chapterCard = document.createElement("div");
                        chapterCard.classList.add("chapter-card");

                        chapterCard.innerHTML = `
                                <div class="chapter-header">
                                    <h3>${chapter.title}</h3>
                                </div>
                                
                                <div class="chapter-img">
                                    <img src="${chapter.img}" alt="${chapter.title}">
                                </div>

                                <p class="chapter-desc">${chapter.desc}</p>

                                <div class="chapter-meta">
                                    <div class="chapter-time">Time: ${chapter.time}</div>
                                    <div class="chapter-progress">Progress: ${chapter.progress}%</div>
                                </div>
                            `;

                        chapterCard.addEventListener("click", () => {
                            openChapter(chapter.lessonId);
                        });

                        chapters.appendChild(chapterCard);
                    });


                };
                /* Lesson RenderingJS */

                let lessons = document.querySelector(".lessons");

                const lessonArray = {
                    KON1: {
                            id: "KON1",
                            title: "1.  Comparing Numbers",
                            hook: `
        <svg viewBox="0 0 800 450" width="100%" height="auto" style="background-color: var(--bg-card); border-radius: var(--radius-lg); display: block; margin: 0 auto; max-width: 600px; border: 1px solid var(--border-subtle);">
        <!-- Sleek Sans-Serif Lesson Title -->
        <text x="400" y="75" text-anchor="middle" font-family="var(--font-heading), sans-serif" font-size="28" font-weight="700" fill="var(--accent-yellow)">Comparing Numbers</text>

        <!-- Scale Stand (with a gap in the center to prevent overlap with the inequality symbol) -->
        <line x1="400" y1="180" x2="400" y2="210" stroke="var(--text-primary)" stroke-width="6" stroke-linecap="round" />
        <line x1="400" y1="290" x2="400" y2="390" stroke="var(--text-primary)" stroke-width="6" stroke-linecap="round" />
        <path d="M 340 390 L 460 390 Q 460 405 400 405 Q 340 405 340 390 Z" fill="var(--text-primary)" />
        <circle cx="400" cy="180" r="10" fill="var(--text-primary)" />

        <!-- Main Beam tilted down on left (heavy) and up on right (light) -->
        <line x1="220" y1="210" x2="580" y2="150" stroke="var(--text-primary)" stroke-width="6" stroke-linecap="round" />

        <!-- Left Pan (Lower) -->
        <!-- Left/Right straight strings angled outwards to clear the digits -->
        <line x1="220" y1="210" x2="140" y2="330" stroke="var(--text-primary)" stroke-width="2" />
        <line x1="220" y1="210" x2="300" y2="330" stroke="var(--text-primary)" stroke-width="2" />
        <path d="M 140 330 Q 220 345 300 330" fill="none" stroke="var(--text-primary)" stroke-width="5" stroke-linecap="round" />
        <!-- Left Digit (85) -->
        <text x="220" y="325" text-anchor="middle" font-family="var(--font-heading), sans-serif" font-size="60" font-weight="900" fill="var(--accent-yellow)">85</text>

        <!-- Right Pan (Higher) -->
        <!-- Left/Right straight strings angled outwards to clear the digits -->
        <line x1="580" y1="150" x2="500" y2="270" stroke="var(--text-primary)" stroke-width="2" />
        <line x1="580" y1="150" x2="660" y2="270" stroke="var(--text-primary)" stroke-width="2" />
        <path d="M 500 270 Q 580 285 660 270" fill="none" stroke="var(--text-primary)" stroke-width="5" stroke-linecap="round" />
        <!-- Right Digit (42) -->
        <text x="580" y="265" text-anchor="middle" font-family="var(--font-heading), sans-serif" font-size="60" font-weight="900" fill="var(--accent-yellow)">42</text>

        <!-- Glowing Greater-Than Symbol '>' pointing left (vertex pointing right) -->
        <path d="M 380 235 L 420 250 L 380 265" fill="none" stroke="var(--accent-yellow)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" filter="drop-shadow(0 0 8px var(--accent-yellow-glow))" />
        </svg>
                            `,
                            concept: "Numbers are everywhere! Let's learn how to compare them using Place Values.",
                            interaction: {
                                type: "comparison",
                            },
                            labTooltips: "Drag blocks of different values to different sides and compare.",
                            explaination: "To compare numbers, look at the digits from left to right. Start with the biggest place (like thousands, then hundreds). The first different digit tells you which number is bigger. Bigger digit = bigger number.",
                            practice: {
                                type: "comparison",
                                question: "Which number is greater: 127 or 168?",
                                answer: "168"
                        },
                            quiz: {
                                name: "Blitz Check",
                                desc: "Can you beat this lesson?"
                            }
                        },
                    KON2:  {
                            id: "KON2",
                            title: "2.  Place Value System",
                            hook: `<img src="Images/pvLesson.svg"></img>`,
                            concept: "By moving a few digits, you can make new numbers and see how place value works up to 10,000.",
                            interaction: {
                                type: "placevalue",
                                digits: [1,0,8,5,4]
                            },
                            labTooltips: "Drag digits into slots. Double-click to remove and edit.",
                            explaination: "When digits change places, the number changes too. A digit's position gives it value (ones, tens, hundreds, etc.). We can make new numbers just by changing their places. We can also make bigger numbers by reaching 10,000.",
                            practice: {
                                type: "placeValue",
                                question: "How many numbers can you make from 965? (don't repeat a digit)",
                                answer: "6"
                        },
                            quiz: {
                                name: "Blitz Check",
                                desc: "Can you beat this lesson?"
                            },
                    },
                    KON3: { 
                        id: "KON3",
                            title: "3.  Large Numbers",
                            hook: `<img src="Images/LargeNumbers.svg" alt="Large Numbers">`,
                            concept: "Numbers dont stop at thousands, let's explore even bigger numbers and how to read them easily.",
                            interaction: {
                                type: "largeNumbers"
                            },
                            labTooltips: "Drag commas and drop them between digits to format the number correctly.",
                            explaination: "As we move left, numbers keep growing. After thousands come lakhs and 10 lakhs. Bigger numbers represent huge quantities. But as they grow, reading them can get tricky. Place values and commas help us read and understand large numbers easily.",
                            practice: {
                                type: "largeNumbers",
                                question: "Add commas to this number to make it easier to read: 9743658",
                                answer: "9,743,658"
                            },
                            quiz: {
                                name: "Blitz Check",
                                desc: "Can you beat this lesson?"
                            },
                    },
                    KON4: { 
                        id: "KON4",
                            title: "4.  Estimation",
                            hook: `<img src="Images/LargeNumbers.svg" alt="Large Numbers">`,
                            concept: "Numbers dont stop at thousands, let's explore even bigger numbers and how to read them easily.",
                            interaction: {
                                type: "estimation",
                                min: 40,
                                max: 50,
                                value: 43
                            },
                            labTooltips: "Drag commas and drop them between digits to format the number correctly.",
                            explaination: "As we move left, numbers keep growing. After thousands come lakhs and 10 lakhs. Bigger numbers represent huge quantities. But as they grow, reading them can get tricky. Place values and commas help us read and understand large numbers easily.",
                            practice: {
                                type: "estimation",
                                question: "Add commas to this number to make it easier to read: 9743658",
                                answer: "9,743,658"
                            },
                            quiz: {
                                name: "Blitz Check",
                                desc: "Can you beat this lesson?"
                            },
                    },
                }
                
                    function renderAllLesson(id) {
                const lessonData = lessonArray[id];
                const lessonContainer = document.querySelector(".lessons");

                const hookContent =
                    typeof lessonData.hook === "function"
                        ? lessonData.hook()
                        : lessonData.hook;

                const lessonEl = document.createElement("div");
                lessonEl.classList.add("lesson-container");
                lessonEl.innerHTML = `
                    <div class="lesson-header">
                        <h1>${lessonData.title}</h1>
                    </div>

                    <div class="lesson-hook">
                        ${hookContent}
                    </div>

                    <div class="lesson-concept">
                        ${lessonData.concept}
                    </div>

                    <div class="interaction-container">
                        <div class="lesson-interaction">
                            <div class="interaction-header">
                            <div></div>
                                <span class="interaction-name">
                                BlitzLab
                                </span>
                                <div class="interaction-info" data-tooltip="${lessonData.labTooltips}"><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
<!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
<path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path><path d="M12 22c5.51 0 10-4.49 10-10S17.51 2 12 2 2 6.49 2 12s4.49 10 10 10m0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8"></path>
</svg></div>
                            </div>
                            <div class="interaction-body"></div>
                        </div>

                        <div class="lesson-practice">

                            <div class="lesson-explain">
                                ${lessonData.explaination}
                            </div>

                            <div class="lesson-prac-question">
                                <p>${lessonData.practice.question}</p>

                                <input 
                                    class="practice-input" 
                                    placeholder="Type your answer..."
                                />

                                <button class="practice-submit">
                                    Check Answer
                                </button>

                                <p class="practice-result"></p>
                            </div>

                        </div>  
                    </div>
                    <div class="lesson-quiz">
                        <div class="quiz-name">
                        ${lessonData.quiz.name}
                        </div>
                        <div class="quiz-desc">
                        ${lessonData.quiz.desc}
                        </div>
                    </div>
                `;

                lessonContainer.appendChild(lessonEl);

                const interactionBody =
            lessonEl.querySelector(".interaction-body");

            if(
            lessonData.interaction.type==="comparison"
            ){

                blocksContainer=
                interactionBody;

                renderBlocks();

            }


            else if(
            lessonData.interaction.type==="placevalue"
            ){
            interactionBody.classList.add("pv-lesson");
            interactionBody.style.setProperty("--chart-cols", "5");
            interactionBody.innerHTML=` 
            <div class="place-value-chart">
            <div class="place-column">
                Ten Thousands
            </div>
            <div class="place-column">
                Thousands
            </div>
            <div class="place-column">
                Hundreds
            </div>
            <div class="place-column">
                Tens
            </div>
            <div class="place-column">
                Ones
            </div>

            <div class="slot" data-place="0"></div>
            <div class="slot" data-place="1"></div>
            <div class="slot" data-place="2"></div>
            <div class="slot" data-place="3"></div>
            <div class="slot" data-place="4"></div>


            </div>
            <div class="number-name">
                10,854
            </div>

            `;
            let digits = [1,0,8,5,4];
            const allSlots = interactionBody.querySelectorAll(".slot");
            renderDigits(
                digits,
                allSlots
            )

            updateNumberName(interactionBody, "placevalue");



            }
            else if(
            lessonData.interaction.type==="largeNumbers"
            ){
            interactionBody.classList.add("pv-lesson");
            interactionBody.style.setProperty("--chart-cols", "7");
            interactionBody.innerHTML=` 
            <div class="place-value-chart">
            <div class="place-column">  
                Ten Lakhs
            </div>
            <div class="place-column">
                Lakhs
            </div>
            <div class="place-column">
                Ten Thousands
            </div>
            <div class="place-column">
                Thousands
            </div>
            <div class="place-column">
                Hundreds
            </div>
            <div class="place-column">
                Tens
            </div>
            <div class="place-column">
                Ones
            </div>

            <div class="slot" data-place="0"><div class="comma-drop-zone" data-gap="0"></div></div>
            <div class="slot" data-place="1"><div class="comma-drop-zone" data-gap="1"></div></div>
            <div class="slot" data-place="2"><div class="comma-drop-zone" data-gap="2"></div></div>
            <div class="slot" data-place="3"><div class="comma-drop-zone" data-gap="3"></div></div>
            <div class="slot" data-place="4"><div class="comma-drop-zone" data-gap="4"></div></div>
            <div class="slot" data-place="5"><div class="comma-drop-zone" data-gap="5"></div></div>
            <div class="slot" data-place="6"><div class="comma-drop-zone" data-gap="6"></div></div>

           </div>

            <div class="comma-lab-container">
                <p class="comma-instructions">Drag commas and drop them between digits:</p>
                <div class="comma-tray">    
                    <span class="draggable-comma" id="comma-beta">,</span>
                    <span class="draggable-comma" id="comma-alpha">,</span>

                    <div class="comma-feedback-tooltip", style="display:none;"></div>
                </div>
            </div>
            <div class="number-name">
                7236584
            </div>

            `;

            let digits = [7,2,3,6,5,8,4];
            interactionBody.classList.add("large-numbers-mode");
            const allSlots = interactionBody.querySelectorAll(".slot");
            const allGaps = interactionBody.querySelectorAll(".comma-drop-zone");
            const allCommas = interactionBody.querySelectorAll(".draggable-comma");
            renderDigits(
                digits,
                allSlots
                
            )
            allCommas.forEach(comma =>{
                makeElementDraggable(comma, allGaps, handleCommaDrop);
            })
            }
            else if (
                lessonData.interaction.type === "estimation"
            ){
                console.log("SUCCESS: Entered Estimation branch!");

                interactionBody.classList.add("estimation-mode");

                const minVal = lessonData.interaction.min;
                const maxVal = lessonData.interaction.max;
                const startVal = lessonData.interaction.value;

                renderNumberLine(interactionBody, minVal, maxVal, startVal)
            }
                


                const input = lessonEl.querySelector(".practice-input");
                const submitBtn = lessonEl.querySelector(".practice-submit");
                const resultText = lessonEl.querySelector(".practice-result");

                submitBtn.addEventListener("click", () => {
                    if (lessonData.practice.type === "comparison") {
                        const userAnswer = input.value.trim();
                        if (userAnswer === lessonData.practice.answer) {
                            resultText.textContent = "Correct!";
                            resultText.style.color = "lime";
                            resultText.style.padding = "10px";
                            resultText.style.backgroundColor = "rgba(0,255,0,0.1)";
                            resultText.style.border = "1px solid green"; 
                        } else {
                            resultText.textContent = "Look at the Tens place. Try again.";
                            resultText.style.color = "tomato";
                            resultText.style.padding = "10px";
                            resultText.style.backgroundColor = "rgba(255,99,71,0.1)";
                            resultText.style.border = "1px solid tomato";
                        }
                    }
                    else if (lessonData.practice.type === "placeValue") {
                        const userAnswer = input.value.trim();
                        if (userAnswer === lessonData.practice.answer) {
                            resultText.textContent = "Correct!";
                            resultText.style.color = "lime";
                            resultText.style.padding = "10px";
                            resultText.style.backgroundColor = "rgba(0,255,0,0.1)";
                            resultText.style.border = "1px solid green";    
                        } else {
                            resultText.textContent = "Use all three digits, don't leave any out.";
                            resultText.style.color = "tomato";
                            resultText.style.padding = "10px";
                            resultText.style.backgroundColor = "rgba(255,99,71,0.1)";
                            resultText.style.border = "1px solid tomato";
                        }
                    }
                    else if (lessonData.practice.type === "largeNumbers") {
                        const userAnswer = input.value.trim();
                        if (userAnswer === lessonData.practice.answer) {
                            resultText.textContent = "Correct!";
                            resultText.style.color = "lime";
                            resultText.style.padding = "10px";
                            resultText.style.backgroundColor = "rgba(0,255,0,0.1)";
                        } else {
                            resultText.textContent = "Remember the 1st comma is placed after the hundreds and the next after every 2 digits!";
                            resultText.style.color = "tomato";
                            resultText.style.padding = "10px";
                            resultText.style.backgroundColor = "rgba(255,99,71,0.1)";
                        }
                    };

                });
                    
                

                if (lessonData.initHook) {
                    lessonData.initHook();
                }
            }

                function openChapter(lessonIds) {
                if (!Array.isArray(lessonIds)) {
                    lessonIds = [lessonIds];
                }

                course.innerHTML = "";
                chapters.innerHTML = "";
                title.innerHTML = "Knowing Our Numbers";

                lessons.innerHTML = "";

                lessonIds.forEach(id => {
                    renderAllLesson(id);
                });
            }

                /* Place Value JS */
                function renderDigits(digits, allSlots){
                    
                    digits.forEach(
                        ((digit, index)=>{
                            let digitElement = document.createElement("div");
                            digitElement.classList.add("digit-block");

                            digitElement.textContent = digit;

                            digitElement.dataset.value = digit;
                            let targetSlot = Array.from(allSlots).find(slot => parseInt(slot.dataset.place) === index);

                        if (targetSlot) {
            targetSlot.appendChild(digitElement);
        }
                            makeElementDraggable(digitElement, allSlots, handleDigitSwap);
                            makeDigitEditable(digitElement);
                        })
                    );
                }
                function makeDigitEditable(el){
                    el.addEventListener("dblclick",()=>{

                        const currentValue = el.textContent;

                        console.log("The user wants to edit the number " +  currentValue);

                        const input = document.createElement("input");
                        input.classList.add("digit-edit-input");
                        input.type = "text";
                        input.value = currentValue;
                        input.style.width = "30px";

                        input.addEventListener("keydown", ()=>{
                            const isControlKey = [
                                "Backspace",
                                "Delete",
                                "ArrowLeft",
                                "ArrowRight",
                                "Tab",
                                "Delete",
                                "Enter",
                                "Escape"
                            ].includes(event.key);

                            if (isControlKey){
                                return;
                            }
                            const isNumber = /^[0-9]$/.test(event.key);

                            if (!isNumber || input.value.length > 1){
                                event.preventDefault();
                            }
                            input.addEventListener("input", ()=>{
                                input.value = input.value.replace(/[^0-9]/g, "").substring(0,1);
                            })
                        });

                        el.innerHTML = "";
                        el.appendChild(input);
                        input.focus(); // It already begins in typing mode.

                        // blur event = event triggered when user clicks away from input box, allowing us to save new value and display it.

                        input.addEventListener("blur", ()=>{
                            const newValue = input.value;
                            el.textContent = newValue;
                            el.dataset.value = newValue;

                            const isLargeNumbers = el.closest(".interaction-body").classList.contains("large-numbers-mode");
                            updateNumberName(el.closest(".interaction-body"), isLargeNumbers ? "largeNumbers" : "placevalue");

                        })

                        input.addEventListener("keydown", (event)=>{
                if(event.key === "Enter"){
                    input.blur();
                }
            });
                    });
                }
                function formatNumberDisplay(num) {
    return Number(num).toLocaleString();
}
                function updateNumberName(container){
                    const interactionBody = container || document.querySelector(".interaction-body");
                    if (!interactionBody) return;

                    const slots = interactionBody.querySelectorAll(".slot");
                    let digitString = "";
                        slots.forEach(slot =>{
                            const block = slot.querySelector(".digit-block");
                            if(block){
                                digitString += block.dataset.value;
                            }
                            else {
                                digitString += "0";
                            }
                        })
                        let displayDiv = interactionBody.querySelector(".number-name");
                    if (displayDiv) {
                        let actualNumber = Number(digitString);

                        const isLargeNumbers = interactionBody.classList.contains("large-numbers-mode");

                        if (isLargeNumbers) {
                            displayDiv.textContent = digitString;
                        }
                        else {
                            displayDiv.textContent = formatNumberDisplay(actualNumber);
                        }
                    
                } 
            }





                /* Blocks JS */
                let blocksContainer = document.querySelector(".interaction-body")
                const gridSize = 20;

                let blocks = [
                    {   id:1,
                        value: 1,
                        type: "hundreds",
                        x: 20,
                        y: 80

                    },
                    {   id:2,
                        value: 6,
                        type: "tens",
                        x: 420,
                        y: 80

                    },
                    {   id:3,
                        value: 8,
                        type: "ones",
                        x: 620,
                        y: 80

                    }
                ]
                function createBlock(blockData) {
                    const el = document.createElement("div");

                    el.className = `block ${blockData.type}`;
                    el.textContent = blockData.value;
                    
                    el.dataset.value = blockData.value; 
                    el.dataset.id = blockData.id;
                    el.dataset.type = blockData.type;


                    el.style.left = blockData.x + "px";
                    el.style.top = blockData.y + "px";

                    blocksContainer.appendChild(el);

                    makeDraggable(el);
                    
                }
                function makeDraggable(el) {
                    let isDragging = false;

                    let offsetX = 0;
                    let offsetY = 0;

                    el.addEventListener("mousedown", (e) => {
                        isDragging = true;

                        e.preventDefault();

                        offsetX = e.clientX - el.offsetLeft;    
                        offsetY = e.clientY - el.offsetTop;

                        el.style.zIndex = 1000;
                    });

                document.addEventListener("mousemove", (e) => {
                if (!isDragging) return;

                let x = e.clientX - offsetX;
                let y = e.clientY - offsetY;


                el.style.left = x + "px";
                el.style.top = y + "px";

            });
                    document.addEventListener("mouseup", () => {
                        if (!isDragging) return;
                        isDragging = false;

                        const snappedX = Math.round(el.offsetLeft / gridSize) * gridSize;
                        const snappedY = Math.round(el.offsetTop / gridSize) * gridSize;

                        el.style.left = snappedX + "px";
                        el.style.top = snappedY + "px";
                        el.style.zIndex = "1";
                    });
                }

                function renderBlocks() {
                    blocksContainer.innerHTML = ""

                    blocks.forEach(createBlock);
                }


                /* Terminal JS */

            /* Terminal JS */

            const inputField =
            document.querySelector(".terminal-input");

            const historyBox =
            document.querySelector(".terminal-history");

            if (inputField && historyBox) {

                inputField.addEventListener(
                    "keydown",
                    function(event){

                        if(event.key === "Enter"){

                            let command =
                            inputField.value;

                            if(command !== ""){

                                processCommand(
                                    command
                                );

                            }

                            inputField.value = "";

                        }

                    }
                );

            }

            function processCommand(command){

                if(!historyBox) return;

                let answer;

                try{

                    answer = eval(command);

                }

                catch(error){

                    answer =
                    "Error: Invalid Math Problem";

                }

                historyBox.innerHTML += `
                <div style="color:rgb(162,160,160);">
                <span class="prompt-symbol">></span>
                ${command}
                </div>`;

                historyBox.innerHTML += `
                <div style="
                color:rgb(189,189,189);
                margin-bottom:10px;
                ">
                = ${answer}
                </div>`;

                historyBox.scrollTop =
                historyBox.scrollHeight;

            }
function makeElementDraggable(el, targets, onDropSuccess){
    let originalParent = el.parentElement;
                    let isDragging = false;
                    let offsetX = 0;
                    let offsetY = 0;

                    el.addEventListener("mousedown", (e) =>{
                        isDragging = true;
                        e.preventDefault();//Note for Self, this stops browser from highlighting text.
                        if (e.target.tagName === "INPUT") return; 

                        originalSlot = el.parentElement;

                        offsetX = e.clientX - el.offsetLeft;
                        offsetY = e.clientY - el.offsetTop;

                        el.style.zIndex = 1000;
                    });

                    document.addEventListener("mousemove", (e)=> {
                        if (!isDragging) return;
                        console.log("Active Drag Element Classes:", el.className);
                        
                        let x = e.clientX - offsetX;
                        let y = e.clientY - offsetY;

                        el.style.position = "absolute";
                        el.style.left = x + "px";
                        
                        if(!el.classList.contains("horizontal-only")){
                            el.style.top = y + "px";
                        }
                
                    });
                    document.addEventListener("mouseup", (e)=>{
                        if(!isDragging) return;
                        isDragging = false;
                        el.style.zIndex = 1;

                        let targetSlot = null;

                        targets.forEach(slot => {
                            const slotRect = slot.getBoundingClientRect();
                            if(
                                e.clientX >= slotRect.left &&
                                e.clientX <= slotRect.right &&
                                e.clientY >= slotRect.top &&
                                e.clientY <= slotRect.bottom
                            ){
                                targetSlot = slot;
                            }
                        });
                        if(targetSlot){
                            targetSlot.appendChild(el);
                            el.style.position = "relative"; 
                            el.style.left = "0px";
                            el.style.top = "0px";

                            if (onDropSuccess) {
                                onDropSuccess(targetSlot, el);
                        }
                    }else {
                        originalParent.appendChild(el);
                        el.style.position = "relative"; 
                        el.style.left = "0px";
                        el.style.top = "0px";
                    }
                     });

                    }
function handleDigitSwap(targetSlot, el){
    const existingDigit = targetSlot.querySelector(".digit-block")
                            if (existingDigit && existingDigit !== el){

                                const rectOriginal = originalSlot.getBoundingClientRect();
                                const rectTarget = targetSlot.getBoundingClientRect();
                                
                                const deltaX = rectTarget.left - rectOriginal.left;
                                const deltaY = rectTarget.top - rectOriginal.top;
                                
                                originalSlot.appendChild(existingDigit);

                                existingDigit.style.position = "relative";
                                existingDigit.style.left = "0px";
                                existingDigit.style.top = "0px";

                                existingDigit.style.transition = "none";
                                existingDigit.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

                                existingDigit.offsetHeight;

                                existingDigit.style.transition = "transform 0.3s ease";
                                existingDigit.style.transform = "translate(0, 0)";

                                existingDigit.addEventListener("transitionend", function handler() {
                                    existingDigit.style.transition = "";
                                    existingDigit.style.transform = "";
                                    existingDigit.removeEventListener("transitionend", handler);
                                });

                                targetSlot.appendChild(el);


                            }
                            updateNumberName(el.closest(".interaction-body"));
}
function handleCommaDrop(targetGap, comma){

    console.log("Comma dropped successfully!");

    const allGaps = document.querySelectorAll(".comma-drop-zone");
    const activeGaps = [];

    allGaps.forEach(gap =>{
        if(gap.querySelector(".draggable-comma"))
            activeGaps.push(parseInt(gap.dataset.gap));
    });

    const feedbackTooltip = document.querySelector(".comma-feedback-tooltip");
    const commaInstructions = document.querySelector(".comma-instructions");
    const interactionBody = targetGap.closest(".interaction-body");
    let numberNameDisplay = interactionBody ? interactionBody.querySelector(".number-name") : null;
    
     console.log("Found tooltip element:", feedbackTooltip);

    if(feedbackTooltip){
        if (activeGaps.includes(1) && activeGaps.includes(3) && activeGaps.length === 2){
            feedbackTooltip.innerHTML= ` Great Job! <br> 
            You've placed the commas correctly, making the number easier to read! `;
            feedbackTooltip.style.display = "block";    
            feedbackTooltip.style.color = "green";
            feedbackTooltip.style.padding = "10px";
            feedbackTooltip.style.border = "1px solid lime";
            feedbackTooltip.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
            feedbackTooltip.style.borderRadius = "5px";
            feedbackTooltip.style.fontSize = "14px";
            commaInstructions.style.display = "none";
            if (numberNameDisplay) numberNameDisplay.innerHTML = `72,36,584`;
        }
        else if (activeGaps.length === 2){
            feedbackTooltip.innerHTML = `Keep trying! <br> 
            The 1st comma is placed after the hundreds and the next after every 2 digits!`;
            feedbackTooltip.style.display = "block";
            feedbackTooltip.style.color = "tomato";
            feedbackTooltip.style.padding = "10px";
            feedbackTooltip.style.border = "1px solid tomato";
            feedbackTooltip.style.backgroundColor = "rgba(255, 99, 71, 0.1)";
            feedbackTooltip.style.borderRadius = "5px";
            feedbackTooltip.style.fontSize = "14px";
            commaInstructions.style.display = "none";
        }
        else {
            feedbackTooltip.style.display = "none";
            commaInstructions.style.display = "block";
        }
    }
}
function renderNumberLine(container, min, max, value){

    console.log("Passed to renderNumberLine:", { container, min, max, value });
    const totalSpan = max - min;

    if (totalSpan <= 0) return;


    const percentage = (value - min) / totalSpan * 100;

    let ticksHtml = "";
    for (let i = 1; i < totalSpan; i++) {
        const tickPercentage = (i / totalSpan) * 100;
        ticksHtml += `<div class="tick-mark" style="left: ${tickPercentage}%"></div>`;
    }

    container.innerHTML = `
    <div class="line-wrapper">
    <div class="line-title">Estimation Number Line</div>
    <div class="number-line">
        <div class="line-labels">
            <span class="label-min">${min}</span>
            <span class="label-max">${max}</span>
        </div>
        <div class="line-track">

            ${ticksHtml}

            <div class="line-indicator" style="left: ${percentage}%">
                <span class="indicator-value"> ${value} </span>
                <div class="indicator-pin"></div>
            </div>
        </div>
        </div>
        <div class="line-desc">Drag the yellow point to either edge of the line to round off to the nearest 10s.</div>
    </div>
        `;
        const indicator = container.querySelector(".line-indicator");
        indicator.classList.add("horizontal-only");
        const targets = container.querySelectorAll(".label-min, .label-max");
        makeElementDraggable(indicator, targets, handleEstimationDrop);

        handleEstimationDrop(container, indicator);
}
function handleEstimationDrop(targetBenchmark, indicator){
    const value = parseInt(indicator.querySelector(".indicator-value").textContent);
    
    const minElement = parseInt(indicator.querySelector(".label-min"));
    const min = parseInt(minElement.textContent);

    const maxElement = parseInt(indicator.querySelector(".label-max"));
    const max = parseInt(maxElement.textContent);

    console.log("Values read:", {value, min, max, chosenAnswer});
}


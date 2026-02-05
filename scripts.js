      // Shuffle logic (Fisher-Yates)
      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }

      let currentQuestionIndex = 0;
      let score = 0;
      let selectedQuestions = shuffle([...masterBank]);

      const app = {
        init() {
          this.renderQuestion();
          document
            .getElementById("next-btn")
            .addEventListener("click", () => this.nextQuestion());
        },
        renderQuestion() {
          const question = selectedQuestions[currentQuestionIndex];
          const qText = document.getElementById("question-text");
          const optContainer = document.getElementById("options-container");
          const feedback = document.getElementById("feedback");
          const nextBtn = document.getElementById("next-btn");

          qText.innerText = `Q${currentQuestionIndex + 1}: ${question.q}`;
          document.getElementById("progress-display").innerText =
            `Question: ${currentQuestionIndex + 1}/${selectedQuestions.length}`;
          optContainer.innerHTML = "";
          feedback.classList.add("hidden");
          feedback.className =
            "mt-6 p-5 rounded-xl hidden border-l-4 shadow-sm";
          nextBtn.classList.add("hidden");

          // Shuffle options for each question too
          const options = question.o.map((text, index) => ({
            text,
            isCorrect: index === question.a,
          }));
          const shuffledOptions = shuffle([...options]);

          shuffledOptions.forEach((option) => {
            const btn = document.createElement("button");
            btn.className =
              "option-btn w-full text-left p-4 border-2 border-gray-200 rounded-xl transition duration-200 font-medium text-gray-700 hover:border-indigo-300";
            btn.innerText = option.text;
            btn.dataset.correct = option.isCorrect;
            btn.onclick = () =>
              this.handleAnswer(option.isCorrect, btn, question.r);
            optContainer.appendChild(btn);
          });
        },
        handleAnswer(isCorrect, btn, rationale) {
          const optBtns = document.querySelectorAll(".option-btn");
          const feedback = document.getElementById("feedback");
          const feedbackText = document.getElementById("feedback-text");
          const rationaleText = document.getElementById("rationale-text");
          const nextBtn = document.getElementById("next-btn");

          optBtns.forEach((b) => (b.onclick = null));

          if (isCorrect) {
            btn.classList.add("correct");
            score++;
            feedbackText.innerText = "Correct! ✅";
            feedback.classList.add("bg-green-50", "border-green-500");
            feedbackText.className = "text-green-700 font-bold";
          } else {
            btn.classList.add("incorrect");
            // Highlight the correct one
            optBtns.forEach((b) => {
              if (b.dataset.correct === "true") {
                b.classList.add("correct");
              }
            });
            feedbackText.innerText = "Incorrect ❌";
            feedback.classList.add("bg-red-50", "border-red-500");
            feedbackText.className = "text-red-700 font-bold";
          }

          rationaleText.innerText = rationale;
          feedback.classList.remove("hidden");
          nextBtn.classList.remove("hidden");
          document.getElementById("score-display").innerText =
            `Score: ${score}/${currentQuestionIndex + 1}`;
        },
        nextQuestion() {
          currentQuestionIndex++;
          if (currentQuestionIndex < selectedQuestions.length) {
            this.renderQuestion();
          } else {
            this.showResults();
          }
        },
        showResults() {
          document.getElementById("quiz-card").classList.add("hidden");
          const compCard = document.getElementById("completion-card");
          compCard.classList.remove("hidden");
          const percent = Math.round((score / selectedQuestions.length) * 100);
          document.getElementById("final-score").innerText =
            `Final Score: ${score} / ${selectedQuestions.length} (${percent}%)`;
        },
      };

      window.onload = () => app.init();


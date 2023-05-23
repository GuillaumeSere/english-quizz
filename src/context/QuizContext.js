import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();

function Provider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = {
    A1: [
      {
        id: 1,
        question: "What does 'happy' mean?",
        answers: [
          { answer: "Triste", trueAnswer: false },
          { answer: "Enervé", trueAnswer: false },
          { answer: "heureux", trueAnswer: true },
          { answer: "ennuyeux", trueAnswer: false },
        ],
      },
      {
        id: 2,
        question: "What does 'book' mean?",
        answers: [
          { answer: "téléphone", trueAnswer: false },
          { answer: "clé", trueAnswer: false },
          { answer: "livre", trueAnswer: true },
          { answer: "stylo", trueAnswer: false },
        ],
      },
      {
        id: 3,
        question: "What does 'hot' mean?",
        answers: [
          { answer: "froid", trueAnswer: false },
          { answer: "chaud", trueAnswer: true },
          { answer: "humide", trueAnswer: false },
          { answer: "sec", trueAnswer: false },
        ],
      },
      {
        id: 4,
        question: "What does 'red' mean?",
        answers: [
          { answer: "rouge", trueAnswer: true },
          { answer: "vert", trueAnswer: false },
          { answer: "bleu", trueAnswer: false },
          { answer: "jaune", trueAnswer: false },
        ],
      },
      {
        id: 5,
        question: "What does 'cold' mean?",
        answers: [
          { answer: "Chaud", trueAnswer: false },
          { answer: "Humide", trueAnswer: false },
          { answer: "Sec", trueAnswer: false },
          { answer: "Froid", trueAnswer: true },
        ],
      },
      {
        id: 6,
        question: "What does 'small' mean?",
        answers: [
          { answer: "Grand", trueAnswer: false },
          { answer: "Petit", trueAnswer: true },
          { answer: "Haut", trueAnswer: false },
          { answer: "Lourd", trueAnswer: false },
        ],
      },
      {
        id: 7,
        question: "What does 'fast' mean?",
        answers: [
          { answer: "Lent", trueAnswer: false },
          { answer: "Rapide", trueAnswer: true },
          { answer: "Long", trueAnswer: false },
          { answer: "Court", trueAnswer: false },
        ],
      },
      {
        id: 8,
        question: "What does 'big' mean?",
        answers: [
          { answer: "Petit", trueAnswer: false },
          { answer: "Bas", trueAnswer: false },
          { answer: "Grand", trueAnswer: true },
          { answer: "Haut", trueAnswer: false },
        ],
      },
      {
        id: 9,
        question: "What does 'long' mean?",
        answers: [
          { answer: "Court", trueAnswer: false },
          { answer: "Rapide", trueAnswer: false },
          { answer: "Lent", trueAnswer: false },
          { answer: "Long", trueAnswer: true },
        ],
      },
      {
        id: 10,
        question: "What does 'old' mean?",
        answers: [
          { answer: "Jeune", trueAnswer: false },
          { answer: "Beau", trueAnswer: false },
          { answer: "Vieux", trueAnswer: true },
          { answer: "Laid", trueAnswer: false },
        ],
      },
      {
        id: 11,
        question: "What does 'new' mean?",
        answers: [
          { answer: "Nouveau", trueAnswer: true },
          { answer: "Ancien", trueAnswer: false },
          { answer: "Sale", trueAnswer: false },
          { answer: "Propre", trueAnswer: false },
        ],
      },
      {
        id: 12,
        question: "What does 'fast food' mean?",
        answers: [
          { answer: "Repas sain", trueAnswer: false },
          { answer: "Repas delicieux", trueAnswer: false },
          { answer: "Repas cher", trueAnswer: false },
          { answer: "Fast food", trueAnswer: true },
        ],
      },
      {
        id: 13,
        question: "What does 'quiet' mean?",
        answers: [
          { answer: "Bruyant", trueAnswer: false },
          { answer: "Calme", trueAnswer: true },
          { answer: "Animé", trueAnswer: false },
          { answer: "Tranquille", trueAnswer: false },
        ],
      },
      {
        id: 14,
        question: "What does 'fat' mean?",
        answers: [
          { answer: "Maigre", trueAnswer: false },
          { answer: "Gros", trueAnswer: true },
          { answer: "Long", trueAnswer: false },
          { answer: "Court", trueAnswer: false },
        ],
      },
      {
        id: 15,
        question: "What does 'expensive' mean?",
        answers: [
          { answer: "Bon Marché", trueAnswer: false },
          { answer: "Beau", trueAnswer: false },
          { answer: "Cher", trueAnswer: true },
          { answer: "Mauvais", trueAnswer: false },
        ],
      },
      {
        id: 16,
        question: "What does 'cheap' mean?",
        answers: [
          { answer: "Bon marché", trueAnswer: true },
          { answer: "Cher", trueAnswer: false },
          { answer: "Mauvais", trueAnswer: false },
          { answer: "Beau", trueAnswer: false },
        ],
      },
      {
        id: 17,
        question: "What does 'worried' mean?",
        answers: [
          { answer: "Triste", trueAnswer: false },
          { answer: "Heureux", trueAnswer: false },
          { answer: "Ennuyé", trueAnswer: false },
          { answer: "Inquiet", trueAnswer: true },
        ],
      },
      {
        id: 18,
        question: "What does 'sad' mean?",
        answers: [
          { answer: "Heureux", trueAnswer: false },
          { answer: "Beau", trueAnswer: false },
          { answer: "Mauvais", trueAnswer: false },
          { answer: "Triste", trueAnswer: true },
        ],
      },
      {
        id: 19,
        question: "What does 'watch' mean?",
        answers: [
          { answer: "Regarder", trueAnswer: false },
          { answer: "Avoir peur", trueAnswer: false },
          { answer: "Regarder", trueAnswer: true },
          { answer: "Dormir", trueAnswer: false },
        ],
      },
      {
        id: 20,
        question: "What does 'sleep' mean?",
        answers: [
          { answer: "S'enfuir", trueAnswer: false },
          { answer: "Dormir", trueAnswer: true },
          { answer: "Courir", trueAnswer: false },
          { answer: "S'assoir", trueAnswer: false },
        ],
      },
    ],
    A2: [
      {
        id: 1,
        question: "What does 'ability' mean?",
        answers: [
          { answer: "Capacité", trueAnswer: true },
          { answer: "Court", trueAnswer: false },
          { answer: "Fatigué", trueAnswer: false },
          { answer: "Inteligent", trueAnswer: false },
        ],
      },
      {
        id: 2,
        question: "What does 'accept' mean?",
        answers: [
          { answer: "Refuser", trueAnswer: false },
          { answer: "Fusionner", trueAnswer: false },
          { answer: "Accepter", trueAnswer: true },
          { answer: "Se séparer", trueAnswer: false },
        ],
      },
      {
        id: 3,
        question: "What does 'achieve' mean?",
        answers: [
          { answer: "Perdre", trueAnswer: false },
          { answer: "Réussir", trueAnswer: true },
          { answer: "Se battre", trueAnswer: false },
          { answer: "Se reposer", trueAnswer: false },
        ],
      },
      {
        id: 4,
        question: "What does 'add' mean?",
        answers: [
          { answer: "Ajouter", trueAnswer: true },
          { answer: "Soustarire", trueAnswer: false },
          { answer: "Mélanger", trueAnswer: false },
          { answer: "Casser", trueAnswer: false },
        ],
      },
      {
        id: 5,
        question: "What does 'advantage' mean?",
        answers: [
          { answer: "Désavantage", trueAnswer: false },
          { answer: "Problème", trueAnswer: false },
          { answer: "Succés", trueAnswer: false },
          { answer: "Avantage", trueAnswer: true },
        ],
      },
      {
        id: 6,
        question: "What does 'apologize' mean?",
        answers: [
          { answer: "Complimenter", trueAnswer: false },
          { answer: "Encourager", trueAnswer: false },
          { answer: "Offrir un cadeau", trueAnswer: false },
          { answer: "S'excuser", trueAnswer: true },
        ],
      },
      {
        id: 7,
        question: "What does 'attract' mean?",
        answers: [
          { answer: "Sauver", trueAnswer: false },
          { answer: "Aider", trueAnswer: false },
          { answer: "Attirer", trueAnswer: true },
          { answer: "Aimer", trueAnswer: false },
        ],
      },
      {
        id: 8,
        question: "What does 'begin' mean?",
        answers: [
          { answer: "Terminer", trueAnswer: false },
          { answer: "Commencer", trueAnswer: true },
          { answer: "Parler", trueAnswer: false },
          { answer: "Penser", trueAnswer: false },
        ],
      },
      {
        id: 9,
        question: "What does 'believe' mean?",
        answers: [
          { answer: "Refuser", trueAnswer: false },
          { answer: "Attaquer", trueAnswer: false },
          { answer: "Croire", trueAnswer: true },
          { answer: "Voir", trueAnswer: false },
        ],
      },
      {
        id: 10,
        question: "What does 'build' mean?",
        answers: [
          { answer: "Construire", trueAnswer: true },
          { answer: "Détruire", trueAnswer: false },
          { answer: "Combatre", trueAnswer: false },
          { answer: "Elever", trueAnswer: false },
        ],
      },
      {
        id: 11,
        question: "What does 'call' mean?",
        answers: [
          { answer: "Voir", trueAnswer: false },
          { answer: "Approuver", trueAnswer: false },
          { answer: "Arrêter", trueAnswer: false },
          { answer: "Appeler", trueAnswer: true },
        ],
      },
      {
        id: 12,
        question: "What does 'care' mean?",
        answers: [
          { answer: "Donner", trueAnswer: false },
          { answer: "Attendre", trueAnswer: false },
          { answer: "S'occuper de", trueAnswer: true },
          { answer: "Voir", trueAnswer: false },
        ],
      },
      {
        id: 13,
        question: "What does 'catch' mean?",
        answers: [
          { answer: "Partir", trueAnswer: false },
          { answer: "Comprendre", trueAnswer: false },
          { answer: "Attraper", trueAnswer: true },
          { answer: "Faire", trueAnswer: false },
        ],
      },
      {
        id: 14,
        question: "What does 'choose' mean?",
        answers: [
          { answer: "Accepter", trueAnswer: false },
          { answer: "Choisir", trueAnswer: true },
          { answer: "Répondre", trueAnswer: false },
          { answer: "Rejeter", trueAnswer: false },
        ],
      },
      {
        id: 15,
        question: "What does 'clean' mean?",
        answers: [
          { answer: "Salir", trueAnswer: false },
          { answer: "Regarder", trueAnswer: false },
          { answer: "Casser", trueAnswer: false },
          { answer: "Nettoyer", trueAnswer: true },
        ],
      },
      {
        id: 16,
        question: "What does 'close' mean?",
        answers: [
          { answer: "Fermer", trueAnswer: true },
          { answer: "Ouvrir", trueAnswer: false },
          { answer: "Regarder", trueAnswer: false },
          { answer: "Rassembler", trueAnswer: false },
        ],
      },
      {
        id: 17,
        question: "What does 'cook' mean?",
        answers: [
          { answer: "Vider", trueAnswer: false },
          { answer: "Cuisiner", trueAnswer: true },
          { answer: "être coincé", trueAnswer: false },
          { answer: "Voir", trueAnswer: false },
        ],
      },
      {
        id: 18,
        question: "What does 'count' mean?",
        answers: [
          { answer: "trouver", trueAnswer: false },
          { answer: "Frapper", trueAnswer: false },
          { answer: "Vaincre", trueAnswer: false },
          { answer: "Compter", trueAnswer: true },
        ],
      },
      {
        id: 19,
        question: "What does 'cry' mean?",
        answers: [
          { answer: "Sourire", trueAnswer: false },
          { answer: "être en colère", trueAnswer: false },
          { answer: "Pleurer", trueAnswer: true },
          { answer: "Avoir peur", trueAnswer: false },
        ],
      },
      {
        id: 20,
        question: "What does 'cut' mean?",
        answers: [
          { answer: "Couper", trueAnswer: true },
          { answer: "Coller", trueAnswer: false },
          { answer: "Abîmer", trueAnswer: false },
          { answer: "Vendre", trueAnswer: false },
        ],
      },
    ],
    B1: [
      {
        id: 1,
        question: "What does 'accommodation' mean?",
        answers: [
          { answer: "repas", trueAnswer: false },
          { answer: "Vêtements", trueAnswer: false },
          { answer: "Hébergement", trueAnswer: true },
          { answer: "Travail", trueAnswer: false },
        ],
      },
      {
        id: 2,
        question: "What does 'adventure' mean?",
        answers: [
          { answer: "Amitié", trueAnswer: false },
          { answer: "Aventure", trueAnswer: true },
          { answer: "Amour", trueAnswer: false },
          { answer: "Succés", trueAnswer: false },
        ],
      },
      {
        id: 3,
        question: "What does 'anxious' mean?",
        answers: [
          { answer: "Anxieus", trueAnswer: true },
          { answer: "Heureux", trueAnswer: false },
          { answer: "Calme", trueAnswer: false },
          { answer: "Effrayé", trueAnswer: false },
        ],
      },
      {
        id: 4,
        question: "What does 'career' mean?",
        answers: [
          { answer: "Ecole", trueAnswer: false },
          { answer: "Famille", trueAnswer: false },
          { answer: "Santé", trueAnswer: false },
          { answer: "Carrière", trueAnswer: true },
        ],
      },
      {
        id: 5,
        question: "What does 'comfortable' mean?",
        answers: [
          { answer:"Difficile", trueAnswer: false },
          { answer: "Confortable", trueAnswer: true },
          { answer: "Chaud", trueAnswer: false },
          { answer: "Douloureux", trueAnswer: false },
        ],
      },
      {
        id: 6,
        question: "What does 'culture' mean?",
        answers: [
          { answer: "Sport", trueAnswer: false },
          { answer: "Culture", trueAnswer: true },
          { answer: "nouriture", trueAnswer: false },
          { answer: "Nature", trueAnswer: false },
        ],
      },
      {
        id: 7,
        question: "What does 'deduction' mean?",
        answers: [
          { answer: "Estimation", trueAnswer: false },
          { answer: "Observation", trueAnswer: false },
          { answer: "Déduction", trueAnswer: true },
          { answer: "Don", trueAnswer: false },
        ],
      },
      {
        id: 8,
        question: "What does 'empathy' mean?",
        answers: [
          { answer: "Empathie", trueAnswer: true },
          { answer: "Tolérance", trueAnswer: false },
          { answer: "Appréciation", trueAnswer: false },
          { answer: "Questionnement", trueAnswer: false },
        ],
      },
      {
        id: 9,
        question: "What does 'frustration' mean?",
        answers: [
          { answer: "Succés", trueAnswer: false },
          { answer: "Excitation", trueAnswer: false },
          { answer: "Frustation", trueAnswer: true },
          { answer: "Energie", trueAnswer: false },
        ],
      },
      {
        id: 10,
        question: "What does 'globalization' mean?",
        answers: [
          { answer: "Régionalisation", trueAnswer: false },
          { answer: "Nationalisation", trueAnswer: false },
          { answer: "Eloignement", trueAnswer: false },
          { answer: "Mondialisation", trueAnswer: true },
        ],
      },
      {
        id: 11,
        question: "What does 'hypothesis' mean?",
        answers: [
          { answer: "Preuve", trueAnswer: false },
          { answer: "Résultat", trueAnswer: false },
          { answer: "Hypotèse", trueAnswer: true },
          { answer: "Poposition", trueAnswer: false },
        ],
      },
      {
        id: 12,
        question: "What does 'inevitable' mean?",
        answers: [
          { answer: "Inévitable", trueAnswer: true },
          { answer: "Nécessaire", trueAnswer: false },
          { answer: "Courant", trueAnswer: false },
          { answer: "Trompeur", trueAnswer: false },
        ],
      },
      {
        id: 13,
        question: "What does 'justify' mean?",
        answers: [
          { answer: "Rejeter", trueAnswer: false },
          { answer: "Penser", trueAnswer: false },
          { answer: "Changer", trueAnswer: false },
          { answer: "Justifier", trueAnswer: true },
        ],
      },
      {
        id: 14,
        question: "What does 'knowledge' mean?",
        answers: [
          { answer:"Connaissance", trueAnswer: true },
          { answer: "Croyance", trueAnswer: false },
          { answer: "Pensée", trueAnswer: false },
          { answer: "Experience", trueAnswer: false },
        ],
      },
      {
        id: 15,
        question: "What does 'independent' mean?",
        answers: [
          { answer: "Heureux", trueAnswer: false },
          { answer: "Indépendant", trueAnswer: true },
          { answer: "Faible", trueAnswer: false },
          { answer: "Energique", trueAnswer: false },
        ],
      },
      {
        id: 16,
        question: "What does 'opportunity' mean?",
        answers: [
          { answer:"Difficulté", trueAnswer: false },
          { answer: "Opportunité", trueAnswer: true },
          { answer: "Objectif", trueAnswer: false },
          { answer: "Beau", trueAnswer: false },
        ],
      },
      {
        id: 17,
        question: "What does 'responsible' mean?",
        answers: [
          { answer: "Jaloux", trueAnswer: false },
          { answer: "Plein d'amour", trueAnswer: false },
          { answer: "Responsable", trueAnswer: true },
          { answer: "Courageux", trueAnswer: false },
        ],
      },
      {
        id: 18,
        question: "What does 'sufficient' mean?",
        answers: [
          { answer:"Difficile", trueAnswer: false },
          { answer: "Mauvais", trueAnswer: false },
          { answer: "Riche", trueAnswer: false },
          { answer: "Suffisant", trueAnswer: true },
        ],
      },
      {
        id: 19,
        question: "What does 'tradition' mean?",
        answers: [
          { answer: "En", trueAnswer: false },
          { answer: "Tradition", trueAnswer: true },
          { answer: "Beau", trueAnswer: false },
          { answer: "Musique", trueAnswer: false },
        ],
      },
      {
        id: 20,
        question: "What does 'vocabulary' mean?",
        answers: [
          { answer:"Image", trueAnswer: false },
          { answer: "Vocabulaire", trueAnswer: true },
          { answer: "Livre", trueAnswer: false },
          { answer: "Recette de cuisine", trueAnswer: false },
        ],
      },
    ],
    B2: [
      {
        id: 1,
        question: "What does 'acquaintance' mean?",
        answers: [
          { answer: "Connaissance", trueAnswer: true },
          { answer: "Accompagnement", trueAnswer: false },
          { answer: "Origanilté", trueAnswer: false },
          { answer: "Déduction", trueAnswer: false },
        ],
      },
      {
        id: 2,
        question: "Which one is the meaning of 'consequence'?",
        answers: [
          { answer: "Logique", trueAnswer: false },
          { answer: "Conséquence", trueAnswer: true },
          { answer: "Enquête", trueAnswer: false },
          { answer: "Traitement", trueAnswer: false },
        ],
      },
      {
        id: 3,
        question: "What is the meaning of 'nervous'?",
        answers: [
          { answer:"Paresseux", trueAnswer: false },
          { answer: "Ambitieux", trueAnswer: false },
          { answer: "Nerveux", trueAnswer: true },
          { answer: "Travailleur", trueAnswer: false },
        ],
      },
      {
        id: 4,
        question: "Which one is the meaning of 'Complicated'?",
        answers: [
          { answer: "Compliqué", trueAnswer: true },
          { answer: "Simple", trueAnswer: false },
          { answer: "Détaillé", trueAnswer: false },
          { answer: "Rapide", trueAnswer: false },
        ],
      },
      {
        id: 5,
        question: "What does 'fluctuate' mean?",
        answers: [
          { answer: "Varier", trueAnswer: true },
          { answer: "Observer", trueAnswer: false },
          { answer: "Affirmer", trueAnswer: false },
          { answer: "Dépenser", trueAnswer: false },
        ],
      },
      {
        id: 6,
        question: "Which one is the meaning of 'humble'?",
        answers: [
          { answer: "Modeste", trueAnswer: true },
          { answer: "Honnête", trueAnswer: false },
          { answer: "Arrogant", trueAnswer: false },
          { answer: "Intelligent", trueAnswer: false },
        ],
      },
      {
        id: 7,
        question: "What is the meaning of 'incorporate'?",
        answers: [
          { answer: "Inclure", trueAnswer: false },
          { answer: "Réduire", trueAnswer: false },
          { answer: "Séparer", trueAnswer: true },
          { answer: "Convenir", trueAnswer: false },
        ],
      },
      {
        id: 8,
        question: "Which one is the meaning of 'justifiable'?",
        answers: [
          { answer: "Susceptible", trueAnswer: false },
          { answer: "Acceptable", trueAnswer: true },
          { answer: "Invincible", trueAnswer: false },
          { answer: "Raisonnable", trueAnswer: false },
        ],
      },
      {
        id: 9,
        question: "What does 'legacy' mean?",
        answers: [
          { answer: "Héritier", trueAnswer: false },
          { answer: "Histoire", trueAnswer: false },
          { answer: "Laisser un héritage", trueAnswer: false },
          { answer: "Héritage", trueAnswer: true },
        ],
      },
      {
        id: 10,
        question: "Which one is the meaning of 'manifest'?",
        answers: [
          { answer: "Caché", trueAnswer: false },
          { answer: "Evident", trueAnswer: true },
          { answer: "Indésirable", trueAnswer: false },
          { answer: "Présenter des excuses", trueAnswer: false },
        ],
      },
      {
        id: 11,
        question: "What is the meaning of 'notorious'?",
        answers: [
          { answer:"Célèbre", trueAnswer: false },
          { answer: "Mystérieux", trueAnswer: false },
          { answer: "Infâme", trueAnswer: true },
          { answer: "Plein d'amour", trueAnswer: false },
        ],
      },
      {
        id: 12,
        question: "Which one is the meaning of 'obstruct'?",
        answers: [
          { answer: "Obstruer", trueAnswer: true },
          { answer: "Approuver", trueAnswer: false },
          { answer: "Augmenter", trueAnswer: false },
          { answer: "Attaquer", trueAnswer: false },
        ],
      },
      {
        id: 13,
        question: "What does 'profound' mean?",
        answers: [
          { answer: "Dépourvu de sens", trueAnswer: false },
          { answer: "¨Profond", trueAnswer: true },
          { answer: "Vulgaire", trueAnswer: false },
          { answer: "Rude", trueAnswer: false },
        ],
      },
      {
        id: 14,
        question: "Which one is the meaning of 'rational'?",
        answers: [
          { answer:"Rationnel", trueAnswer: true },
          { answer: "Convaincant", trueAnswer: false },
          { answer: "Obscur", trueAnswer: false },
          { answer: "Réduit", trueAnswer: false },
        ],
      },
      {
        id: 15,
        question: "What is the meaning of 'speculate'?",
        answers: [
          { answer: "Spéculer", trueAnswer: false },
          { answer: "Réfléchir", trueAnswer: false },
          { answer: "Supposer", trueAnswer: true },
          { answer: "Promettre", trueAnswer: false },
        ],
      },
      {
        id: 16,
        question: "Which one is the meaning of 'trivial'?",
        answers: [
          { answer: "Imposer", trueAnswer: false },
          { answer: "Précieux", trueAnswer: false },
          { answer: "Timide", trueAnswer: false },
          { answer: "Anodin", trueAnswer: true },
        ],
      },
      {
        id: 17,
        question: "What does 'ultimate' mean?",
        answers: [
          { answer: "Nihai", trueAnswer: true },
          { answer: "Retardé", trueAnswer: false },
          { answer: "Frappant", trueAnswer: false },
          { answer: "Peu important", trueAnswer: false },
        ],
      },
      {
        id: 18,
        question: "Which one is the meaning of 'vague'?",
        answers: [
          { answer: "Grossier", trueAnswer: false },
          { answer: "Pas clair", trueAnswer: true },
          { answer: "âgé", trueAnswer: false },
          { answer: "Juste", trueAnswer: false },
        ],
      },
      {
        id: 19,
        question: "What is the meaning of 'widespread'?",
        answers: [
          { answer:"Limité", trueAnswer: false },
          { answer: "Répandu", trueAnswer: true },
          { answer: "Différent", trueAnswer: false },
          { answer: "Réduit", trueAnswer: false },
        ],
      },
      {
        id: 20,
        question: "Which one is the meaning of 'vivid'?",
        answers: [
          { answer: "Vibrant", trueAnswer: true },
          { answer: "Fascinant", trueAnswer: false },
          { answer: "Confus", trueAnswer: false },
          { answer: "Négatif", trueAnswer: false },
        ],
      },
    ],
    C1: [
      {
        id: 1,
        question: "What is the meaning of the word 'conjecture'?",
        answers: [
          { answer: "Vérité", trueAnswer: false },
          { answer: "Supposition", trueAnswer: true },
          { answer: "Mensonge", trueAnswer: false },
          { answer: "Décision", trueAnswer: false },
        ],
      },
      {
        id: 2,
        question: "What does the word 'diligent' mean?",
        answers: [
          { answer: "Paresseux", trueAnswer: false },
          { answer: "Appliqué", trueAnswer: true },
          { answer: "Lent", trueAnswer: false },
          { answer: "Inquiet", trueAnswer: false },
        ],
      },
      {
        id: 3,
        question: "What is the meaning of the word 'elaborate'?",
        answers: [
          { answer: "Simple", trueAnswer: false },
          { answer: "Complex", trueAnswer: true },
          { answer: "Ennnuyeux", trueAnswer: false },
          { answer: "Approprié", trueAnswer: false },
        ],
      },
      {
        id: 4,
        question: "What does the word 'feasible' mean?",
        answers: [
          { answer:"Raisonnable", trueAnswer: true },
          { answer: "Dépourvu de sens", trueAnswer: false },
          { answer: "Dangereux", trueAnswer: false },
          { answer: "Etrange", trueAnswer: false },
        ],
      },
      {
        id: 5,
        question: "What is the meaning of the word 'gregarious'?",
        answers: [
          { answer: "Introverti", trueAnswer: false },
          { answer: "Amical", trueAnswer: false },
          { answer: "Fiable", trueAnswer: false },
          { answer: "Sociable", trueAnswer: true },
        ],
      },
      {
        id: 6,
        question: "What does the word 'hackneyed' mean?",
        answers: [
          { answer:"Original", trueAnswer: false },
          { answer: "Banal", trueAnswer: true },
          { answer: "Puissant", trueAnswer: false },
          { answer: "Inoffensif", trueAnswer: false },
        ],
        trueAnswer: "sıkıcı",
      },
      {
        id: 7,
        question: "What is the meaning of the word 'imminent'?",
        answers: [
          { answer: "Caché", trueAnswer: false },
          { answer: "Imminent", trueAnswer: true },
          { answer: "Evident", trueAnswer: false },
          { answer: "Succès", trueAnswer: false },
        ],
      },
      {
        id: 8,
        question: "What does the word 'inquisitive' mean?",
        answers: [
          { answer: "Curieux", trueAnswer: true },
          { answer: "Peureux", trueAnswer: false },
          { answer: "Excessif", trueAnswer: false },
          { answer: "Confiant", trueAnswer: false },
        ],
      },
      {
        id: 9,
        question: "What is the meaning of the word 'juxtapose'?",
        answers: [
          { answer: "Mettre côte à côte", trueAnswer: false },
          { answer: "Maintenir sépparer", trueAnswer: false },
          { answer: "Réunir", trueAnswer: true },
          { answer: "Rendre ennemi", trueAnswer: false },
        ],
      },
      {
        id: 10,
        question: "What does the word 'keen' mean?",
        answers: [
          { answer: "Déterminé", trueAnswer: false },
          { answer: "Tranchant", trueAnswer: false },
          { answer: "Inutile", trueAnswer: true },
          { answer: "Inquiet", trueAnswer: false },
        ],
      },
      {
        id: 11,
        question: "What is the meaning of the word 'lucid'?",
        answers: [
          { answer: "Incertain", trueAnswer: false },
          { answer: "Obscur", trueAnswer: false },
          { answer: "Compréhensible", trueAnswer: true },
          { answer: "Multiple", trueAnswer: false },
        ],
      },
      {
        id: 12,
        question: "What does the word 'malleable' mean?",
        answers: [
          { answer: "Inadapté", trueAnswer: false },
          { answer: "Souple", trueAnswer: true },
          { answer: "Désordonné", trueAnswer: false },
          { answer: "Amical", trueAnswer: false },
        ],
      },
      {
        id: 13,
        question: "What is the meaning of the word 'nostalgia'?",
        answers: [
          { answer: "Nostalgie", trueAnswer: true },
          { answer: "Ressentiment", trueAnswer: false },
          { answer: "Excitation", trueAnswer: false },
          { answer: "Dédaigne", trueAnswer: false },
        ],
      },
      {
        id: 14,
        question: "What does the word 'obscure' mean?",
        answers: [
          { answer: "Obscur", trueAnswer: false },
          { answer: "Clair", trueAnswer: true },
          { answer: "Compréhensible", trueAnswer: false },
          { answer: "Acclamé", trueAnswer: false },
        ],
      },
      {
        id: 15,
        question: "What is the meaning of the word 'pensive'?",
        answers: [
          { answer: "Pensif", trueAnswer: true },
          { answer: "Peureux", trueAnswer: false },
          { answer: "Joyeux", trueAnswer: false },
          { answer: "Suspect", trueAnswer: false },
        ],
      },
      {
        id: 16,
        question: "What does the word 'quaint' mean?",
        answers: [
          { answer: "Elégant", trueAnswer: false },
          { answer: "Etrange", trueAnswer: false },
          { answer: "Pittoresque", trueAnswer: true },
          { answer: "Elevé", trueAnswer: false },
        ],
      },
      {
        id: 17,
        question: "What is the meaning of the word 'applaud'?",
        answers: [
          { answer: "Optimiste", trueAnswer: false },
          { answer: "Résistant", trueAnswer: false },
          { answer: "Applaudir", trueAnswer: true },
          { answer: "Stupide", trueAnswer: false },
        ],
      },
      {
        id: 18,
        question: "What does the word 'superfluous' mean?",
        answers: [
          { answer:"Nécessaire", trueAnswer: false },
          { answer: "Sperflu", trueAnswer: true },
          { answer: "Réussir", trueAnswer: false },
          { answer: "Malheureux", trueAnswer: false },
        ],
      },
      {
        id: 19,
        question: "What is the meaning of the word 'tedious'?",
        answers: [
          { answer:"Excitant", trueAnswer: false },
          { answer: "Ennuyeux", trueAnswer: true },
          { answer: "Sans signification", trueAnswer: false },
          { answer: "Problématique", trueAnswer: false },
        ],
      },
      {
        id: 20,
        question: "What does the word 'diminish' mean?",
        answers: [
          { answer:"Rare", trueAnswer: false },
          { answer: "Réduire", trueAnswer: true },
          { answer: "Malveillant", trueAnswer: false },
          { answer: "Célèbre", trueAnswer: false },
        ],
      },
    ],
    C2: [
      {
        id: 1,
        question: "What is the meaning of the word 'abundant'?",
        answers: [
          { answer: "Insufisant", trueAnswerr: false },
          { answer: "Limité", trueAnswerr: false },
          { answer: "Etroit", trueAnswerr: false },
          { answer: "Abondant", trueAnswerr: true },
        ],
      },
      {
        id: 2,
        question: "What does the word 'exquisite' mean?",
        answers: [
          { answer:"Répugnant", trueAnswerr: false },
          { answer: "Doux", trueAnswerr: false },
          { answer: "Exquis", trueAnswerr: true },
          { answer: "Tranchant", trueAnswerr: false },
        ],
      },
      {
        id: 3,
        question: "What is the definition of 'conundrum'?",
        answers: [
          { answer:"Enigme", trueAnswerr: true },
          { answer: "Problème simple", trueAnswerr: false },
          { answer: "Choix multiple", trueAnswerr: false },
          { answer: "Réponse correcte", trueAnswerr: false },
        ],
      },
      {
        id: 4,
        question: "What is the meaning of the word 'elated'?",
        answers: [
          { answer: "Plein d'espoir", trueAnswerr: false },
          { answer: "Triste", trueAnswerr: false },
          { answer: "Enthousiaste", trueAnswerr: true },
          { answer: "En colère", trueAnswerr: false },
        ],
      },
      {
        id: 5,
        question: "What does the word 'affluent' mean?",
        answers: [
          { answer: "Pauvre", trueAnswerr: false },
          { answer: "Riche", trueAnswerr: true },
          { answer: "Fatigué", trueAnswerr: false },
          { answer: "En bonne santé", trueAnswerr: false },
        ],
      },
      {
        id: 6,
        question: "What is the definition of 'exasperate'?",
        answers: [
          { answer: "être surpris", trueAnswerr: false },
          { answer: "Effrayer", trueAnswerr: false },
          { answer: "Exaspérer", trueAnswerr: true },
          { answer: "Soulager", trueAnswerr: false },
        ],
      },
      {
        id: 7,
        question: "What is the meaning of the word 'resilient'?",
        answers: [
          { answer: "Fragile", trueAnswerr: false },
          { answer: "Compatible", trueAnswerr: false },
          { answer: "Faible", trueAnswerr: false },
          { answer: "Résistant", trueAnswerr: true },
        ],
      },
      {
        id: 8,
        question: "What does the word 'ominous' mean?",
        answers: [
          { answer: "Etrange", trueAnswerr: false },
          { answer: "Optimiste", trueAnswerr: false },
          { answer: "Dangereux", trueAnswerr: true },
          { answer: "Destructeur", trueAnswerr: false },
        ],
      },
      {
        id: 9,
        question: "What is the definition of 'scrutinize'?",
        answers: [
          { answer: "Observer", trueAnswerr: false },
          { answer: "Exclure", trueAnswerr: false },
          { answer: "Examiner", trueAnswerr: true },
          { answer: "Accélérer", trueAnswerr: false },
        ],
      },
      {
        id: 10,
        question: "What is the meaning of the word 'prolific'?",
        answers: [
          { answer: "Prolifique", trueAnswerr: true },
          { answer: "Négligent", trueAnswerr: false },
          { answer: "Faible", trueAnswerr: false },
          { answer: "Insignifiant", trueAnswerr: false },
        ],
      },
      {
        id: 11,
        question: "What does the word 'impeccable' mean?",
        answers: [
          { answer: "Mauvais", trueAnswerr: false },
          { answer: "Impécable", trueAnswerr: true },
          { answer: "Inquiet", trueAnswerr: false },
          { answer: "Remplir d'amour", trueAnswerr: false },
        ],
      },
      {
        id: 12,
        question: "What is the definition of 'perplexed'?",
        answers: [
          { answer: "Perplexe", trueAnswerr: true },
          { answer: "Ennuyé", trueAnswerr: false },
          { answer: "Effrayé", trueAnswerr: false },
          { answer: "özgü", trueAnswerr: false },
        ],
      },
      {
        id: 13,
        question: "What is the meaning of the word 'mundane'?",
        answers: [
          { answer: "sans signification", trueAnswerr: false },
          { answer: "Amusant", trueAnswerr: false },
          { answer: "Original", trueAnswerr: false },
          { answer: "Ordinaire", trueAnswerr: true },
        ],
      },
      {
        id: 14,
        question: "What does the word 'quintessential' mean?",
        answers: [
          { answer:"Essentiel", trueAnswerr: true },
          { answer: "Complexe", trueAnswerr: false },
          { answer: "Grossier", trueAnswerr: false },
          { answer: "Branché", trueAnswerr: false },
        ],
      },
      {
        id: 15,
        question: "What is the definition of the word 'ephemeral'?",
        answers: [
          { answer: "Ephémère", trueAnswerr: true },
          { answer: "Permanent", trueAnswerr: false },
          { answer: "Mauvais", trueAnswerr: false },
          { answer: "Utile", trueAnswerr: false },
        ],
      },
      {
        id: 16,
        question: "What is the meaning of the word 'verbose'?",
        answers: [
          { answer:"Compréhensible", trueAnswerr: false },
          { answer: "Précis", trueAnswerr: false },
          { answer: "Clair", trueAnswerr: false },
          { answer: "Verbeux", trueAnswerr: true },
        ],
      },
      {
        id: 17,
        question: "What does the word 'quell' mean?",
        answers: [
          { answer:"Blesser", trueAnswerr: false },
          { answer: "Coller", trueAnswerr: false },
          { answer: "Apaiser", trueAnswerr: true },
          { answer: "Augmenter", trueAnswerr: false },
        ],
      },
      {
        id: 18,
        question: "What is the meaning of the word 'ennui'?",
        answers: [
          { answer:"Excitation", trueAnswerr: false },
          { answer: "Ennui", trueAnswerr: true },
          { answer: "Bonheur", trueAnswerr: false },
          { answer: "Curiosité", trueAnswerr: false },
        ],
      },
      {
        id: 19,
        question: "What does the word 'idiosyncrasy' mean?",
        answers: [
          { answer:"Expérience", trueAnswerr: false },
          { answer: "Habitude", trueAnswerr: false },
          { answer: "Etrangeté", trueAnswerr: true },
          { answer: "Intelligence", trueAnswerr: false },
        ],
      },
      {
        id: 20,
        question: "What is the meaning of the word 'ubiquitous'?",
        answers: [
          { answer: "Instantané", trueAnswerr: false },
          { answer: "Universel", trueAnswerr: true },
          { answer: "Limité", trueAnswerr: false },
          { answer: "Evident", trueAnswerr: false },
        ],
      },
    ],
  };

  const sharedValuesAndMethods = {
    questions,
    currentQuestion,
    setCurrentQuestion,
  };

  return (
    <QuizContext.Provider value={sharedValuesAndMethods}>
      {children}
    </QuizContext.Provider>
  );
}

const useQuizContext = () => useContext(QuizContext);
export { Provider, useQuizContext };
export default QuizContext;

"use client"
import { renderToString } from "react-dom/server"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { review } from "../models/types"

export const reviews: review[] = [
    {
        author: "Delphine",
        text: "Sabrina a été une bouffée d'oxygène dans mon chemin du changement.<br/>Elle m'a accompagné pendant plusieurs mois pour m'emmener vers mon objectif de perte de poids, d'atteinte d'un défi sportif, un équilibre mental qui m'aide à continuer d'avancer.<br/>Sans aucune hésitation, son coaching est ce qui m'était nécessaire pour amorcer ce que je n'arrivais pas depuis des années à accomplir. Merci Sabrina pour tout",
        tag: renderToString(<><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></>)
    },
    {
        author: "Clara",
        text: "Je suis ravie d’avoir été accompagnée par Sabrina qui est très professionnelle. C’est une Coach très positive et douce qui rassure et met en confiance ! Sabrina m’a aidé à atteindre mes objectifs de perte de poids en débloquant les barrières psychologiques qui me freinaient dans ma réussite.<br/>Je conseille fortement l’aide d’un coach qui nous aide à « cadrer » nos objectifs afin qu’ils soient atteignables et mesurables dans le temps.<br/>Sabrina est disponible et positive, c’est un plaisir de travailler avec elle ! Elle a su m’acompagner au-delà de mes attentes initiales.",
        tag: renderToString(<><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></>)
    },
    {
        author: "Aline",
        text: "Tout commence par une rencontre amicale et très rapidement je me rends compte de l'impact rayonnant et dynamisant de Sabrina sur moi. Au travail comme dans la vie Sabrina nous emmène avec elle en respectant nos besoins et capacités. Toujours en objectif de nous emmener vers le haut et de faire sortir le meilleur de nous .... Naturellement <br/>Merci Sabrina pour tout ce que tu apportes.",
        tag: renderToString(<><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></>)
    },
    {
        author: "Angélique", text: "Accepter de se faire accompagner, pour progresser là où j’avais atteint mes limites, n'était pas évident. Et je savais encore moins par où commencer.<br/>En l'occurrence, Sabrina est une coach de vie qui sait se rendre disponible, à l'écoute et dont l'accompagnement est personnalisé dès la 1ère séance et ce jusqu'à atteindre les objectifs que je m’étais fixés : m’accompagner dans ma transition de vie, retrouver ma forme physique, et de la motivation au quotidien. Et surtout : un équilibre vie pro/vie perso.<br/>Merci encore Sabrina !",
        tag: renderToString(<><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></>)
    },
    {
        author: "Alyse",
        text: "Je suis vraiment reconnaissante d'avoir bénéficié du coaching de Sabrina. Sa disponibilité et son écoute m'ont permis de me sentir comprise dès le départ. C'est une femme avec une sensibilité incroyable, capable de cerner rapidement les blocages et d’apporter des solutions adaptées. Grâce à son accompagnement, j'ai gagné en clarté et j'ai amélioré mon organisation au quotidien. Elle a su me booster tout en respectant mon rythme. Elle m’a aidé à mieux structurer mes journées et à aborder mes objectifs de manière plus sereine. Je vois vraiment les effets sur mon travail et mon bien-être au quotidien. Son approche est à la fois professionnelle et humaine. Je recommande vivement son coaching !<br/>Un grand merci pour ton soutien Sabrina !",
        tag: renderToString(<><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></>)
    },
    {
        author: "Anthony",
        text: "Il arrive à tout le monde d'avoir des périodes de doutes. Sabrina n'y pas répond, elle a fait bien plus : elle m'a accompagné en toute simplicité et sans jamais porter de jugement à me poser les bonnes questions. Cela ouvre d'autres perspectives et surtout ne pas s'enfermer. Avoir une écoute extérieure à notre cercle habituel à été bénéfique, et que ça a été avec Sabrina fût un plus.<br/>Merci Sabrina",
        tag: renderToString(<><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></>)
    },
    {
        author: "Nora",
        text: "Un atelier très sympa avec Sabrina qui a su nous mettre en confiance et nous donner des pistes pour agir. Un bon exercice de réflexion à partager pour lever les freins à l'action ! On quitte l'atelier plus sereinement aussi bien pour la confiance que pour la compréhension de soi-même ! Je recommande vivement les services de Sabrina quelque soit notre problématique en parler c'est déjà agir",
        tag: renderToString(<><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></>)
    },
    {
        author: "Safia",
        text: "J’ai vraiment apprécié le coaching que j’ai reçu. L'accompagnement a été personnalisé, clair et extrêmement bénéfique. Merci pour tous les conseils. Sabrina a su créer un environnement de confiance et m’a permis de voir les choses sous un autre angle. Une expérience très enrichissante que je recommande.",
        tag: renderToString(<><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></>)
    },
    {
        author: "Aline",
        text: "J’ai eu la chance d’assister à un atelier sur le thème de la charge mentale « parentale » Je dis bien chance ! En effet, il est rare pouvoir assister à ces réunions dans un cadre aussi serein et abordable où il fait bon parler et échanger avec d’autres personnes : et ce , en toute simplicité et confiance. Et ceci grâce à Sabrina qui mène son atelier avec tant de bienveillance. Chacun trouve sa place. On en sort motiver ! Prêt à mettre en place les nombreux conseils de Sabrina !<br/>Un grand merci pr cette expérience.",
        tag: renderToString(<><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></>)
    },
    {
        author: "Elodie",
        text: "Le dynamisme et la bonne humeur de Sabrina est un plaisir. Elle m’a permis d’y voir plus claire sur mon projet et d’avancer sereinement. Grace à son coaching je vais pouvoir mettre des actions en place rapidement. Merci beaucoup",
        tag: renderToString(<><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></>)
    },
    {
        author: "Julie",
        text: "Un énorme merci Sabrina pour avoir organisé la première rando-coaching sur St Nolff. Je suis heureuse d’avoir fait le déplacement de Lanester. J’ai aimé ton dynamisme, ton esprit d’équipe, ta bonne humeur, ta douceur et ta bienveillance. Le fait de bouger et surtout de marcher dans la nature tout en amenant à des prises de conscience grâce aux questions que tu nous as posé fut enrichissant et inspirant. Je vous recommande à 100% Sabrina pour la belle personne qu’elle est et son professionnalisme.",
        tag: renderToString(<><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></>)
    },
    {
        author: "Julien",
        text: "Sabrina est une coach de vie à l’écoute, bienveillante, professionnelle et humaine.<br/>Elle a su répondre à mes problématiques qui m’empêchaient d’avancer aussi bien dans ma vie perso et pro. Grâce à son accompagnement, j’avance aujourd’hui avec plus de sérénité et de clarté.<br/>Merci pour tout Sabrina !<br/>Je recommande vivement son coaching à toute personne confrontée à des freins personnels et/ou professionnels.",
        tag: renderToString(<><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></>)
    },
    {
        author: "Clea",
        text: "",
        tag: renderToString(<><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></>)
    }
]
export const siteData = {
    title: 'Un pas de plus',
    description: 'Un pas de plus, c\'est un accompagnement pour booster le mental des parents et un dispositif d\'accompagnement des entreprises pour prendre soin de la santé physique et mentale de leur salariés parents.',
    author: 'Antoine Bollinger',
    owner: 'Sabrina Appriou',
    url: 'https://unpasdeplus-coaching.fr',
    email: process.env.NEXT_PUBLIC_EMAIL_TO
}

export const emailMessage = {
    sending: 'Envoi en cours...',
    sent: 'Cher.ère {0},<br/>Votre message a bien été envoyé. Je reviendrai vers vous très rapidement. A bientôt !',
    serverError: 'Oups... Une erreur est survenue.<br/>Merci de réessayer, ou de m\'envoyer un email directement à l\'adresse <strong>{0}</strong>.<br/>A bientôt !',
    fetchError: 'Oups... Une erreur est survenue.<br/>Merci de réessayer, ou de m\'envoyer un email directement à l\'adresse <strong>{0}</strong>.<br/>A bientôt !<br/><br/>Message d\'erreur : {1}',
}
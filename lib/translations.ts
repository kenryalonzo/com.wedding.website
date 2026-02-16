export type Language = "fr" | "en" | "de";

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      saveTheDate: "Date",
      story: "Notre Histoire",
      info: "Infos",
      gallery: "Galerie",
      thanks: "Remerciements",
      location: "Lieu",
      guestbook: "Livre d'Or",
      rsvp: "Réserver",
    },
    headerSubtitle: "Mariage",
    mobileMenuClose: "Fermer",
    footer: {
      rights: "Tous droits réservés.",
      madeWith: "Fait avec",
      for: "pour",
    },
    common: {
      dateFormat: "02 Mai 2026",
      coupleName: "Cédric & Karelle",
      siteBy: "Site réalisé par",
    },
    testimonials: {
      sectionTitle: "Notre Histoire",
      sectionSubtitle: "Deux cœurs, un chemin, une destinée",
      verse:
        "\"Car je connais les projets que j'ai formés sur vous, dit l'Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance.\"",
      verseRef: "— Jérémie 29:11 —",
      steps: [
        {
          id: "debut",
          type: "narrative" as const,
          title: "Le Début",
          date: "Août 2019",
          content: `Qui aurai cru que nos échecs ne sont pas toujours des échecs, mais des tremplins pour une réussite et une nouvelle histoire ! C'est ainsi qu'en pleine transition d'un centre de cours de langue allemande à un autre centre nous nous retrouvâme en août 2019 dans le même centre de cours de langue à Yaoundé.\nAinsi c'était le début d'une amitié désintéressée et centrée vers la réussite de nos modules non validés au préalable! Au fils du temps cette amitié a donné naissance à quelque chose de plus grand qui nessecitait désormais une approbation divine ! Chacun développait quelque chose qui désormais etait inepliquable ! Cependant il fallait l'accord et le cachet de notre propriétaire : notre Créateur !`,
        },
        {
          id: "cedric",
          type: "testimony" as const,
          speaker: "Cédric",
          title: "Cédric",
          content: `Dans cette amitié, nous sommes devenus un véritable soutien l'un pour l'autre.\nJe ne peux pas oublier ce jour où ma chambre a été inondée alors que nous devions composer le lendemain. Après avoir révisé ensemble et nous être séparés, j'ai découvert l'état de ma chambre. Malgré la fatigue et l'envie de réussir, je me suis simplement allongée sur mon lit et j'ai dormi, entourée d'eau. Très touché par ma situation, tu m'as apporté à manger le lendemain et tu ne m'as pas laissé me laisser troubler par les circonstances. Ensemble, nous avons nettoyé la maison. Et depuis ce jour, tu n'as jamais cessé de nettoyer les "eaux sales" dans ma vie. Malgré mes manquements, tu es toujours resté près de moi. Les situations difficiles auraient pu t'éloigner, mais jamais tu ne m'as laissé ressentir ton absence.\nMerci pour ton soutien, ta fidélité et ta loyauté. 💫`,
        },
        {
          id: "karelle",
          type: "testimony" as const,
          speaker: "Karelle",
          title: "Karelle",
          content: `Très bluffée par sa taille et sa beauté physique au premier abord, je ne puis éteindre la curiosité qui m'animais de connaître son caractère et sa personne proprement dite! Cependant je me mis en prière pour éviter tout désagrément et surtout désobeissance. Alors je mis Dieu à l'épreuve plusieurs fois demandant sa confirmation, il l'a fait par plusieurs moyens des signes, sa paroles et des rêves ! Cependant cela ne me suffisait pas toujours ! Il fallait que Cédric fasse ses preuves ! Le temps passait et je découvrait un Homme plein d'amour, respectueux, ambitieux et surtout amoureux du Seigneur. En echangeant, je m'apercevais que c'était la pièce manquante de puzzle de ma destinée! Je suis infiniment reconnaissante à Dieu 🙏`,
        },
        {
          id: "croissance",
          type: "narrative" as const,
          title: "La Croissance",
          content: `Nous rendons grâce à Dieu pour Son amour envers nous. C'est dans cet amour que nous avons grandi, que nous avons su nous préserver jusqu'ici, et aujourd'hui nous en voyons les fruits.\nNous réalisons que le fait d'avoir choisi de servir Dieu ensemble nous a profondément fait grandir : dans notre caractère, dans l'amour pour les autres, et surtout dans ce que nous représentons l'un pour l'autre.\nAvec Dieu, nos points à améliorer ont été mieux discernés et travaillés. Servir auprès de personnes plus expérimentées que nous nous a également aidés à mieux nous connaître et à fortifier notre relation.\nNous reconnaissons que Sa présence a été la fondation de notre évolution et de notre unité. 💫`,
        },
        {
          id: "doigt-de-dieu",
          type: "narrative" as const,
          title: "Le Doigt de Dieu",
          date: "Noël 2025",
          content: `Comment parler de nous sans évoquer Noël 2025 ?\nÀ l'origine, chacun de nous avait un programme bien différent. Mais Dieu en a décidé autrement. Nous avons reçu la conviction de passer Noël dans Sa présence.\nNous avons alors choisi de suivre nos parrains pour une semaine, aux pieds du Seigneur. C'est dans cette atmosphère de prière et de consécration que nous avons reçu la confirmation d'officialiser notre relation.\nAprès ce temps précieux, nous nous sommes officiellement fiancés devant nos frères et sœurs, après un « oui, je le veux » prononcé dans ce restaurant.\nLe dimanche suivant, l'homme de Dieu et l'assemblée ont prié pour nous, scellant ainsi notre engagement. Nous avons été bénis et fortifiés.\nCe moment fut marquant pour nous — une réponse claire de la main de Dieu.\nMerci Seigneur. 🙏✨`,
        },
        {
          id: "mariage",
          type: "event" as const,
          title: "Le Mariage",
          date: "02.05.2026",
          content: `Nous ne cesserons de dire merci à Dieu pour nos familles, pour l'amour et le soutien qu'elles représentent pour nous. Vous n'avez pas seulement accepté notre relation : vous croyez en nous, et nous le voyons chaque jour à travers vos actions et vos conseils. Nous remercions également nos parrains ainsi que tous ceux qui nous soutiennent dans cette préparation. Il serait difficile de vous citer tous, car vous êtes nombreux à nous encourager chaque jour dans cette marche.\nLe 02.05.2026 sera une date de réjouissance que nous aurons la joie de partager avec vous.\nMerci d'être à nos côtés en ce jour si précieux.`,
        },
      ],
      dressCode: {
        title: "Code Vestimentaire & Solennité",
        intro:
          "Pour honorer la beauté et la solennité de cette union, nous avons choisi le",
        royalBlue: "bleu royal",
        and: "et l'",
        gold: "or",
        asColors: "comme couleurs de la cérémonie.",
        verse:
          "C'est pourquoi je veux qu'en tout lieu les hommes prient en élevant vers le ciel des mains pures, sans colère ni esprit de dispute. 9 Je veux que les femmes agissent de même, en s'habillant décemment, avec discrétion et simplicité. Qu'elles ne se parent pas d'une coiffure recherchée, d'or, de perles ou de toilettes somptueuses",
        verseRef: "— 1 Timothée 2:8-9 —",
        closing:
          "Nous vous prions de privilégier une tenue décente, empreinte de pudeur et de modestie, afin que ce moment demeure à l'image des valeurs que nous célébrons. Nous vous remercions sincèrement de contribuer, par votre présence et votre élégance, à la grâce de cette journée exceptionnelle. 💙✨",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      saveTheDate: "Date",
      story: "Our Story",
      info: "Info",
      gallery: "Gallery",
      thanks: "Thanks",
      location: "Location",
      guestbook: "Guestbook",
      rsvp: "RSVP",
    },
    headerSubtitle: "Wedding",
    mobileMenuClose: "Close",
    footer: {
      rights: "All rights reserved.",
      madeWith: "Made with",
      for: "for",
    },
    common: {
      dateFormat: "May 02, 2026",
      coupleName: "Cédric & Karelle",
      siteBy: "Site made by",
    },
    testimonials: {
      sectionTitle: "Our Story",
      sectionSubtitle: "Two hearts, one path, one destiny",
      verse:
        '"For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope."',
      verseRef: "— Jeremiah 29:11 —",
      steps: [
        {
          id: "debut",
          type: "narrative" as const,
          title: "The Beginning",
          date: "August 2019",
          content: `Who would have believed that our failures are not always failures, but stepping stones for success and a new story! It was during a transition from one German language school to another that we found ourselves in August 2019 in the same language school in Yaoundé.\nThus began a selfless friendship focused on passing our previously failed modules! Over time, this friendship gave birth to something bigger that now required divine approval! Each of us was developing something that had become inexplicable! However, the agreement and seal of our Owner was needed: our Creator!`,
        },
        {
          id: "cedric",
          type: "testimony" as const,
          speaker: "Cédric",
          title: "Cédric",
          content: `In this friendship, we became a true support for each other.\nI cannot forget the day when my room was flooded while we had an exam the next day. After studying together and parting ways, I discovered the state of my room. Despite the fatigue and the desire to succeed, I simply lay down on my bed and slept, surrounded by water. Deeply moved by my situation, you brought me food the next day and didn't let me be troubled by the circumstances. Together, we cleaned the house. And since that day, you have never stopped cleaning the "dirty waters" in my life. Despite my shortcomings, you have always stayed by my side. Difficult situations could have driven you away, but you never let me feel your absence.\nThank you for your support, your faithfulness and your loyalty. 💫`,
        },
        {
          id: "karelle",
          type: "testimony" as const,
          speaker: "Karelle",
          title: "Karelle",
          content: `Very impressed by his stature and physical beauty at first glance, I could not extinguish the curiosity that drove me to know his character and who he truly was! However, I turned to prayer to avoid any unpleasantness and especially disobedience. So I put God to the test several times asking for His confirmation. He did it through various means: signs, His word, and dreams! However, that still wasn't always enough for me! Cédric had to prove himself! Time passed and I discovered a Man full of love, respectful, ambitious and above all, in love with the Lord. Through our exchanges, I realized that he was the missing piece of my destiny's puzzle! I am infinitely grateful to God 🙏`,
        },
        {
          id: "croissance",
          type: "narrative" as const,
          title: "The Growth",
          content: `We give thanks to God for His love towards us. It is in this love that we have grown, that we have been able to preserve ourselves until now, and today we see the fruits.\nWe realize that choosing to serve God together has profoundly helped us grow: in our character, in our love for others, and especially in what we represent to each other.\nWith God, our areas for improvement have been better discerned and worked on. Serving alongside people more experienced than us has also helped us to know each other better and strengthen our relationship.\nWe acknowledge that His presence has been the foundation of our evolution and our unity. 💫`,
        },
        {
          id: "doigt-de-dieu",
          type: "narrative" as const,
          title: "The Hand of God",
          date: "Christmas 2025",
          content: `How can we talk about ourselves without mentioning Christmas 2025?\nOriginally, each of us had a very different plan. But God decided otherwise. We received the conviction to spend Christmas in His presence.\nWe then chose to follow our mentors for a week, at the feet of the Lord. It was in this atmosphere of prayer and consecration that we received confirmation to make our relationship official.\nAfter this precious time, we officially got engaged in front of our brothers and sisters, after a "yes, I do" spoken in that restaurant.\nThe following Sunday, the man of God and the congregation prayed for us, sealing our commitment. We were blessed and strengthened.\nThis moment was significant for us — a clear answer from the hand of God.\nThank you, Lord. 🙏✨`,
        },
        {
          id: "mariage",
          type: "event" as const,
          title: "The Wedding",
          date: "02.05.2026",
          content: `We will never cease to thank God for our families, for the love and support they represent for us. You have not only accepted our relationship: you believe in us, and we see it every day through your actions and advice. We also thank our mentors and all those who support us in this preparation. It would be difficult to name you all, as there are so many of you encouraging us every day in this journey.\nMay 2, 2026 will be a day of celebration that we will have the joy of sharing with you.\nThank you for being by our side on this precious day.`,
        },
      ],
      dressCode: {
        title: "Dress Code & Solemnity",
        intro:
          "To honor the beauty and solemnity of this union, we have chosen",
        royalBlue: "royal blue",
        and: "and",
        gold: "gold",
        asColors: "as the ceremony colors.",
        verse:
          "Therefore I want the men everywhere to pray, lifting up holy hands without anger or disputing. I also want the women to dress modestly, with decency and propriety, adorning themselves, not with elaborate hairstyles or gold or pearls or expensive clothes",
        verseRef: "— 1 Timothy 2:8-9 —",
        closing:
          "We kindly ask you to favor a decent outfit, marked by modesty and simplicity, so that this moment remains true to the values we celebrate. We sincerely thank you for contributing, through your presence and elegance, to the grace of this exceptional day. 💙✨",
      },
    },
  },
  de: {
    nav: {
      home: "Startseite",
      saveTheDate: "Datum",
      story: "Unsere Geschichte",
      info: "Infos",
      gallery: "Galerie",
      thanks: "Danke",
      location: "Ort",
      guestbook: "Gästebuch",
      rsvp: "Zusage",
    },
    headerSubtitle: "Hochzeit",
    mobileMenuClose: "Schließen",
    footer: {
      rights: "Alle Rechte vorbehalten.",
      madeWith: "Gemacht mit",
      for: "für",
    },
    common: {
      dateFormat: "02. Mai 2026",
      coupleName: "Cédric & Karelle",
      siteBy: "Website erstellt von",
    },
    testimonials: {
      sectionTitle: "Unsere Geschichte",
      sectionSubtitle: "Zwei Herzen, ein Weg, ein Schicksal",
      verse:
        '"Denn ich weiß wohl, was ich für Gedanken über euch habe, spricht der Herr: Gedanken des Friedens und nicht des Leides, dass ich euch gebe Zukunft und Hoffnung."',
      verseRef: "— Jeremia 29:11 —",
      steps: [
        {
          id: "debut",
          type: "narrative" as const,
          title: "Der Anfang",
          date: "August 2019",
          content: `Wer hätte gedacht, dass unsere Misserfolge nicht immer Misserfolge sind, sondern Sprungbretter für Erfolg und eine neue Geschichte! So fanden wir uns im August 2019, mitten im Wechsel von einem Deutschkurs-Zentrum zu einem anderen, im selben Sprachzentrum in Jaunde wieder.\nSo begann eine uneigennützige Freundschaft, die auf den Erfolg unserer zuvor nicht bestandenen Module ausgerichtet war! Im Laufe der Zeit brachte diese Freundschaft etwas Größeres hervor, das nun göttliche Zustimmung erforderte! Jeder von uns entwickelte etwas, das inzwischen unerklärlich geworden war! Doch es brauchte die Zustimmung und das Siegel unseres Eigentümers: unseres Schöpfers!`,
        },
        {
          id: "cedric",
          type: "testimony" as const,
          speaker: "Cédric",
          title: "Cédric",
          content: `In dieser Freundschaft wurden wir eine wahre Stütze füreinander.\nIch kann den Tag nicht vergessen, als mein Zimmer überflutet wurde, während wir am nächsten Tag eine Prüfung hatten. Nachdem wir zusammen gelernt und uns getrennt hatten, entdeckte ich den Zustand meines Zimmers. Trotz der Müdigkeit und dem Willen zu bestehen, legte ich mich einfach auf mein Bett und schlief, umgeben von Wasser. Tief berührt von meiner Situation hast du mir am nächsten Tag Essen gebracht und mich nicht von den Umständen beunruhigen lassen. Gemeinsam haben wir das Haus geputzt. Und seit diesem Tag hast du nie aufgehört, die „schmutzigen Wasser" in meinem Leben zu reinigen. Trotz meiner Mängel bist du immer an meiner Seite geblieben. Schwierige Situationen hätten dich vertreiben können, aber du hast mich deine Abwesenheit nie spüren lassen.\nDanke für deine Unterstützung, deine Treue und deine Loyalität. 💫`,
        },
        {
          id: "karelle",
          type: "testimony" as const,
          speaker: "Karelle",
          title: "Karelle",
          content: `Sehr beeindruckt von seiner Größe und seiner körperlichen Schönheit auf den ersten Blick, konnte ich die Neugier nicht unterdrücken, seinen Charakter und seine Person kennenzulernen! Dennoch wandte ich mich dem Gebet zu, um jede Unannehmlichkeit und vor allem Ungehorsam zu vermeiden. So stellte ich Gott mehrmals auf die Probe und bat um Seine Bestätigung. Er tat es durch verschiedene Mittel: Zeichen, Sein Wort und Träume! Aber das reichte mir nicht immer! Cédric musste sich beweisen! Die Zeit verging und ich entdeckte einen Mann voller Liebe, respektvoll, ehrgeizig und vor allem in den Herrn verliebt. Im Austausch bemerkte ich, dass er das fehlende Puzzleteil meines Schicksals war! Ich bin Gott unendlich dankbar 🙏`,
        },
        {
          id: "croissance",
          type: "narrative" as const,
          title: "Das Wachstum",
          content: `Wir danken Gott für Seine Liebe zu uns. In dieser Liebe sind wir gewachsen, haben uns bis hierhin bewahrt, und heute sehen wir die Früchte.\nWir erkennen, dass die Entscheidung, Gott gemeinsam zu dienen, uns zutiefst hat wachsen lassen: in unserem Charakter, in der Liebe zu anderen und vor allem in dem, was wir füreinander darstellen.\nMit Gott wurden unsere Verbesserungsbereiche besser erkannt und bearbeitet. Der Dienst an der Seite erfahrenerer Menschen hat uns auch geholfen, einander besser kennenzulernen und unsere Beziehung zu stärken.\nWir erkennen an, dass Seine Gegenwart das Fundament unserer Entwicklung und unserer Einheit war. 💫`,
        },
        {
          id: "doigt-de-dieu",
          type: "narrative" as const,
          title: "Gottes Hand",
          date: "Weihnachten 2025",
          content: `Wie kann man über uns sprechen, ohne Weihnachten 2025 zu erwähnen?\nUrsprünglich hatte jeder von uns einen ganz anderen Plan. Aber Gott hat es anders entschieden. Wir empfingen die Überzeugung, Weihnachten in Seiner Gegenwart zu verbringen.\nWir entschieden uns, unseren Mentoren für eine Woche zu folgen, zu Füßen des Herrn. In dieser Atmosphäre des Gebets und der Hingabe erhielten wir die Bestätigung, unsere Beziehung offiziell zu machen.\nNach dieser kostbaren Zeit verlobten wir uns offiziell vor unseren Brüdern und Schwestern, nach einem „Ja, ich will", das in diesem Restaurant ausgesprochen wurde.\nAm darauffolgenden Sonntag beteten der Mann Gottes und die Gemeinde für uns und besiegelten so unsere Verlobung. Wir wurden gesegnet und gestärkt.\nDieser Moment war bedeutend für uns — eine klare Antwort von Gottes Hand.\nDanke, Herr. 🙏✨`,
        },
        {
          id: "mariage",
          type: "event" as const,
          title: "Die Hochzeit",
          date: "02.05.2026",
          content: `Wir werden nicht aufhören, Gott für unsere Familien zu danken, für die Liebe und Unterstützung, die sie für uns darstellen. Ihr habt nicht nur unsere Beziehung akzeptiert: Ihr glaubt an uns, und wir sehen es jeden Tag durch eure Taten und euren Rat. Wir danken auch unseren Mentoren sowie allen, die uns bei dieser Vorbereitung unterstützen. Es wäre schwierig, euch alle zu nennen, denn es sind viele, die uns jeden Tag auf diesem Weg ermutigen.\nDer 02.05.2026 wird ein Tag der Freude sein, den wir gerne mit euch teilen werden.\nDanke, dass ihr an diesem kostbaren Tag an unserer Seite seid.`,
        },
      ],
      dressCode: {
        title: "Kleiderordnung & Feierlichkeit",
        intro:
          "Um die Schönheit und Feierlichkeit dieser Verbindung zu ehren, haben wir",
        royalBlue: "Königsblau",
        and: "und",
        gold: "Gold",
        asColors: "als Farben der Zeremonie gewählt.",
        verse:
          "So will ich nun, dass die Männer beten an allen Orten und aufheben heilige Hände ohne Zorn und Zweifel; desgleichen, dass die Frauen in schicklicher Kleidung sich schmücken mit Anstand und Besonnenheit, nicht mit Haarflechten und Gold oder Perlen oder kostbarem Gewand",
        verseRef: "— 1. Timotheus 2:8-9 —",
        closing:
          "Wir bitten Sie, ein dezentes Outfit zu bevorzugen, geprägt von Bescheidenheit und Einfachheit, damit dieser Moment den Werten entspricht, die wir feiern. Wir danken Ihnen aufrichtig, dass Sie durch Ihre Anwesenheit und Eleganz zur Anmut dieses außergewöhnlichen Tages beitragen. 💙✨",
      },
    },
  },
};

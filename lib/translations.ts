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
    saveTheDate: {
      label: "Réservez la date",
      title1: "Save the",
      title2: "Date",
      date: "2 Mai 2026",
      location: "Delmenhorst, Allemagne",
      quote: "Nous serions honorés de célébrer ce jour avec vous",
    },
    countdown: {
      days: "Jours",
      hours: "Heures",
      minutes: "Min",
      seconds: "Sec",
    },
    story: {
      title: "Notre Thème",
      subtitle: "Un Vase d'Honneur pour Ta Gloire",
      verse:
        "Si donc quelqu'un se conserve pur, en s'abstenant de ces choses, il sera un vase d'honneur, sanctifié, utile à son maître, propre à toute bonne œuvre.",
      verseRef: "— 2 Timothée 2:21 —",
    },
    donation: {
      title: "Liste de Mariage",
      subtitle:
        "Chère famille, chers amis,\n\nVotre présence à notre mariage est pour nous un immense bonheur.\nSi vous souhaitez nous témoigner votre affection par un cadeau, nous vous serions reconnaissants. Une contribution en argent serait grandement privilégiée.\n\nNous vous remercions sincèrement pour votre générosité et votre délicate attention.",
      transfer: "Virement",
      copied: "Copié dans le presse-papier",
      paypalDesc: "Scannez le QR code ou cliquez sur le lien ci-dessous",
      paypalTip:
        '💡 Sélectionnez "Envoyer à un ami" pour éviter les frais de transaction.',
      donate: "Faire un don",
    },
    location: {
      label: "Le Lieu",
      title: "Cérémonie &",
      titleHighlight: "Réception",
      description:
        "Nous avons choisi ce lieu emblématique pour célébrer notre union. Un cadre majestueux au cœur de Delmenhorst, facile d'accès et proche de toutes commodités.",
      addressTitle: "Adresse complète",
      directions: "Itinéraire",
      parking: {
        title: "Parking",
        description:
          "Merci de penser à vous garer dans les différents parkings proches de la cérémonie : Graftwiesen, Hans-Böckler-Platz, City Parkhaus, Am Stadtwall et Hundewiese.",
      },
    },
    guestbook: {
      label: "Livre d'Or",
      title: "Livre d'Or",
      message:
        "Nous sommes profondément touchés par vos vœux, vos prières et votre amour. Vos mots doux remplissent nos cœurs de joie et nous rappellent combien nous sommes bénis d'être si bien entourés. Merci de partager avec nous ce Vase d'Honneur pour la gloire de Dieu.",
      coverLabel: "Livre d'Or",
      coverTitle: "Laissez une trace",
      writtenBy: "Écrit par ",
      from: "De la part de",
      dateLabel: "Le",
      pageLabel: "Page",
    },
    rsvp: {
      title: "Un mot pour le livre d'or",
      subtitle: "Partagez vos vœux et félicitations pour Cédric & Karelle 💍",
      nameLabel: "Votre prénom",
      namePlaceholder: "Ex: Marie",
      messageLabel: "Votre message",
      messagePlaceholder: "Vos vœux, félicitations, prières...",
      sending: "Envoi...",
      confirm: "Envoyer",
      successTitle: "Merci",
      successMessage:
        "Vos vœux ont bien été reçus. Ils seront précieusement gardés dans notre livre d'or. 💛",
      close: "Fermer",
      errorConnection: "Erreur de connexion.",
      errorGeneric: "Une erreur est survenue.",
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
          content: `Qui aurai cru que nos échecs ne sont pas toujours des échecs, mais des tremplins pour une réussite et une nouvelle histoire ! C'est ainsi qu'en pleine transition d'un centre de cours de langue allemande à un autre centre nous nous retrouvâme en août 2019 dans le même centre de cours de langue à Yaoundé.\nAinsi c'était le début d'une **amitié désintéressée** et centrée vers la réussite de nos modules non validés au préalable! Au fils du temps cette amitié a donné naissance à quelque chose de plus grand qui nessecitait désormais une **approbation divine** ! Chacun développait quelque chose qui désormais etait inepliquable ! Cependant il fallait l'accord et le cachet de notre propriétaire : **notre Créateur** !`,
        },
        {
          id: "cedric",
          type: "testimony" as const,
          speaker: "Cédric",
          title: "Cédric",
          content: `Dans cette amitié, nous sommes devenus un véritable **soutien l'un pour l'autre**.\nJe ne peux pas oublier ce jour où ma chambre a été inondée alors que nous devions composer le lendemain. Après avoir révisé ensemble et nous être séparés, j'ai découvert l'état de ma chambre. Malgré la fatigue et l'envie de réussir, je me suis simplement allongée sur mon lit et je me suis endormie, entourée d'eau.\nTrès touché par ma situation, tu m'as apporté à manger le lendemain et tu ne m'as pas laissé être troublé par les circonstances. Ensemble, nous avons nettoyé la maison. Et depuis ce jour, tu n'as **jamais cessé de nettoyer** les « eaux sales » dans ma vie.\nMalgré mes manquements, tu es toujours restée près de moi. Les situations difficiles auraient pu t'éloigner, mais jamais tu ne m'as laissé ressentir ton absence.\nMerci pour ton soutien, ta **fidélité** et ta **loyauté**. 💫`,
        },
        {
          id: "karelle",
          type: "testimony" as const,
          speaker: "Karelle",
          title: "Karelle",
          content: `Très bluffée par sa taille et sa beauté physique au premier abord, je ne puis éteindre la curiosité qui m'animais de connaître son caractère et sa personne proprement dite! Cependant je me mis en **prière** pour éviter tout désagrément et surtout désobeissance. Alors je mis Dieu à l'épreuve plusieurs fois demandant sa confirmation, il l'a fait par plusieurs moyens des signes, sa paroles et des rêves ! Cependant cela ne me suffisait pas toujours ! Il fallait que Cédric fasse ses preuves ! Le temps passait et je découvrait un Homme plein d'amour, respectueux, ambitieux et surtout amoureux du Seigneur. En echangeant, je m'apercevais que c'était la **pièce manquante de puzzle** de ma destinée! Je suis **infiniment reconnaissante** à Dieu 🙏`,
        },
        {
          id: "croissance",
          type: "narrative" as const,
          title: "La Croissance",
          content: `Nous rendons grâce à Dieu pour Son amour envers nous. C'est dans cet amour que nous grandissons, que nous apprenons à nous préserver chaque jour, et dont nous voyons déjà les fruits qui continuent de mûrir.\nNous réalisons que le fait de choisir de **servir Dieu ensemble** nous fait profondément grandir : dans notre caractère, dans l'amour pour les autres, et surtout dans ce que nous devenons l'un pour l'autre.\nAvec Dieu, nos points à améliorer sont progressivement discernés et travaillés. Servir auprès de personnes plus expérimentées que nous nous aide également à mieux nous connaître et à fortifier continuellement notre relation.\nNous reconnaissons que Sa présence est la **fondation de notre évolution** et de notre unité, et qu'elle continue de façonner notre marche commune. 💫`,
        },
        {
          id: "doigt-de-dieu",
          type: "narrative" as const,
          title: "Le Doigt de Dieu",
          date: "Décembre 2025",
          content: `Comment parler de nous sans évoquer la fête de fin d'année 2025 ?\nÀ l'origine, chacun de nous avait un programme bien différent. Mais Dieu en a décidé autrement. Nous avons reçu la conviction de passer cette **fête de fin d'année dans Sa présence**.\nNous avons alors choisi de suivre nos parrains pour une semaine aux pieds du Seigneur. C'est dans cette atmosphère de prière et de consécration que nous avons reçu la confirmation d'**officialiser notre relation**.\nAprès ce temps précieux, nous nous sommes officiellement fiancés devant nos frères et sœurs, après un « oui, je le veux » prononcé dans ce restaurant.\nLe dimanche suivant, l'homme de Dieu et l'assemblée ont prié pour nous, scellant ainsi notre engagement. Nous avons été **bénis et fortifiés**.\nCe moment fut marquant pour nous — une **réponse claire de la main de Dieu**.\nMerci Seigneur. 🙏✨`,
        },
        {
          id: "mariage",
          type: "event" as const,
          title: "Le Mariage",
          date: "02.05.2026",
          content: `Nous sommes reconnaissants à Dieu pour nos familles. Vous nous avez acceptés et continuez de nous **soutenir** dans notre relation, et nous le voyons chaque jour à travers vos actions et vos conseils.\nNous remercions également nos parrains ainsi que tous ceux qui nous soutiennent dans cette préparation. Il nous serait difficile de vous citer tous, car vous êtes nombreux à nous encourager chaque jour dans cette marche.\nLe 02.05.2026 est une **date de réjouissance** que nous nous préparons à vivre et que nous aurons la joie de partager avec vous.\nMerci d'être à nos côtés en ce moment si précieux.`,
        },
      ],
      dressCode: {
        title: "Code Vestimentaire & Solennité",
        intro:
          "Pour honorer la beauté et la solennité de cette union, nous avons choisi le",
        royalBlue: "bleu royal",
        and: ", le",
        gold: "blanc",
        andGold: "et l'",
        goldColor: "or",
        asColors: "comme couleurs de la cérémonie.",
        verse:
          "C'est pourquoi je veux qu'en tout lieu les hommes prient en élevant vers le ciel des mains pures, sans colère ni esprit de dispute. 9 Je veux que les femmes agissent de même, en s'habillant décemment, avec discrétion et simplicité. Qu'elles ne se parent pas d'une coiffure recherchée, d'or, de perles ou de toilettes somptueuses",
        verseRef: "— 1 Timothée 2:8-9 —",
        closing:
          "Nous vous prions de privilégier une **tenue décente**, empreinte de **pudeur** et de **modestie**, **afin que** ce moment demeure à l'image des valeurs que nous célébrons. Nous vous remercions sincèrement de contribuer, par votre présence et votre élégance, à la grâce de cette journée exceptionnelle. 💙✨",
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
    saveTheDate: {
      label: "Save the date",
      title1: "Save the",
      title2: "Date",
      date: "May 2, 2026",
      location: "Delmenhorst, Germany",
      quote: "We would be honored to celebrate this day with you",
    },
    countdown: {
      days: "Days",
      hours: "Hours",
      minutes: "Min",
      seconds: "Sec",
    },
    story: {
      title: "Our Theme",
      subtitle: "A Vase of Honor for Your Glory",
      verse:
        "If a man therefore purge himself from these, he shall be a vessel unto honour, sanctified, and meet for the master's use, and prepared unto every good work.",
      verseRef: "— 2 Timothy 2:21 —",
    },
    donation: {
      title: "Wedding Registry",
      subtitle:
        "Dear family and friends,\n\nYour presence at our wedding is a great joy to us.\nIf you wish to show your affection with a gift, we would be very grateful. A monetary contribution would be greatly appreciated.\n\nWe sincerely thank you for your generosity and your kind attention.",
      transfer: "Bank Transfer",
      copied: "Copied to clipboard",
      paypalDesc: "Scan the QR code or click the link below",
      paypalTip: '💡 Select "Send to a friend" to avoid transaction fees.',
      donate: "Make a donation",
    },
    location: {
      label: "The Venue",
      title: "Ceremony &",
      titleHighlight: "Reception",
      description:
        "We have chosen this iconic venue to celebrate our union. A majestic setting in the heart of Delmenhorst, easily accessible and close to all amenities.",
      addressTitle: "Full address",
      directions: "Directions",
      parking: {
        title: "Parking",
        description:
          "Please remember to park in one of the nearby parking lots close to the ceremony venue: Graftwiesen, Hans-Böckler-Platz, City Parkhaus, Am Stadtwall and Hundewiese.",
      },
    },
    guestbook: {
      label: "Guestbook",
      title: "Guestbook",
      message:
        "We are deeply touched by your wishes, your prayers, and your love. Your sweet words fill our hearts with joy and remind us how blessed we are to be surrounded by such wonderful family and friends. Thank you for sharing with us this Vase of Honor for the glory of God.",
      coverLabel: "Guestbook",
      coverTitle: "Leave a message",
      writtenBy: "Written by ",
      from: "From",
      dateLabel: "On",
      pageLabel: "Page",
    },
    rsvp: {
      title: "A message for the guestbook",
      subtitle: "Share your wishes and blessings for Cédric & Karelle 💍",
      nameLabel: "Your first name",
      namePlaceholder: "e.g. Mary",
      messageLabel: "Your message",
      messagePlaceholder: "Your wishes, congratulations, prayers...",
      sending: "Sending...",
      confirm: "Send",
      successTitle: "Thank you",
      successMessage:
        "Your message has been received. It will be treasured in our guestbook. 💛",
      close: "Close",
      errorConnection: "Connection error.",
      errorGeneric: "An error occurred.",
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
          content: `Who would have believed that our failures are not always failures, but stepping stones for success and a new story! It was during a transition from one German language school to another that we found ourselves in August 2019 in the same language school in Yaoundé.\nThus began a **selfless friendship** focused on passing our previously failed modules! Over time, this friendship gave birth to something bigger that now required **divine approval**! Each of us was developing something that had become inexplicable! However, the agreement and seal of our Owner was needed: **our Creator**!`,
        },
        {
          id: "cedric",
          type: "testimony" as const,
          speaker: "Cédric",
          title: "Cédric",
          content: `In this friendship, we became a true **support for one another**.\nI cannot forget the day when my room was flooded while we had an exam the next day. After studying together and parting ways, I discovered the state of my room. Despite the fatigue and the desire to succeed, I simply lay down on my bed and fell asleep, surrounded by water.\nDeeply moved by my situation, you brought me food the next day and did not let me be troubled by the circumstances. Together, we cleaned the house. And since that day, you have **never stopped cleaning** the \"dirty waters\" in my life.\nDespite my shortcomings, you have always stayed by my side. Difficult situations could have driven you away, but you never let me feel your absence.\nThank you for your support, your **faithfulness** and your **loyalty**. 💫`,
        },
        {
          id: "karelle",
          type: "testimony" as const,
          speaker: "Karelle",
          title: "Karelle",
          content: `Very impressed by his stature and physical beauty at first glance, I could not extinguish the curiosity that drove me to know his character and who he truly was! However, I turned to **prayer** to avoid any unpleasantness and especially disobedience. So I put God to the test several times asking for His confirmation. He did it through various means: signs, His word, and dreams! However, that still wasn't always enough for me! Cédric had to prove himself! Time passed and I discovered a Man full of love, respectful, ambitious and above all, in love with the Lord. Through our exchanges, I realized that he was the **missing piece** of my destiny's puzzle! I am **infinitely grateful** to God 🙏`,
        },
        {
          id: "croissance",
          type: "narrative" as const,
          title: "The Growth",
          content: `We give thanks to God for His love towards us. It is in this love that we are growing, that we learn to preserve ourselves each day, and of which we already see the fruits that continue to ripen.\nWe realize that choosing to **serve God together** makes us grow profoundly: in our character, in our love for others, and especially in what we are becoming for one another.\nWith God, our areas for improvement are progressively discerned and worked on. Serving alongside people more experienced than us also helps us to know each other better and to continually strengthen our relationship.\nWe acknowledge that His presence is the **foundation of our growth** and our unity, and that it continues to shape our journey together. 💫`,
        },
        {
          id: "doigt-de-dieu",
          type: "narrative" as const,
          title: "The Hand of God",
          date: "December 2025",
          content: `How can we talk about ourselves without mentioning the end-of-year celebration of 2025?\nOriginally, each of us had a very different plan. But God decided otherwise. We received the conviction to spend this **end-of-year celebration in His presence**.\nWe then chose to follow our mentors for a week at the feet of the Lord. It was in this atmosphere of prayer and consecration that we received confirmation to **make our relationship official**.\nAfter this precious time, we officially got engaged in front of our brothers and sisters, after a \"yes, I do\" spoken in that restaurant.\nThe following Sunday, the man of God and the congregation prayed for us, sealing our commitment. We were **blessed and strengthened**.\nThis moment was significant for us — a **clear answer from the hand of God**.\nThank you, Lord. 🙏✨`,
        },
        {
          id: "mariage",
          type: "event" as const,
          title: "The Wedding",
          date: "02.05.2026",
          content: `We are grateful to God for our families. You have accepted us and continue to **support** us in our relationship, and we see it every day through your actions and your advice.\nWe also thank our mentors and all those who support us in this preparation. It would be difficult to name you all, as there are so many of you encouraging us every day in this journey.\nMay 2, 2026 is a **day of celebration** that we are preparing to experience and that we will have the joy of sharing with you.\nThank you for being by our side in this precious moment.`,
        },
      ],
      dressCode: {
        title: "Dress Code & Solemnity",
        intro:
          "To honor the beauty and solemnity of this union, we have chosen",
        royalBlue: "royal blue",
        and: ",",
        gold: "white",
        andGold: "and",
        goldColor: "gold",
        asColors: "as the ceremony colors.",
        verse:
          "Therefore I want the men everywhere to pray, lifting up holy hands without anger or disputing. I also want the women to dress modestly, with decency and propriety, adorning themselves, not with elaborate hairstyles or gold or pearls or expensive clothes",
        verseRef: "— 1 Timothy 2:8-9 —",
        closing:
          "We kindly ask you to favor a **decent outfit**, marked by **modesty** and **simplicity**, **so that** this moment remains true to the values we celebrate. We sincerely thank you for contributing, through your presence and elegance, to the grace of this exceptional day. 💙✨",
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
    saveTheDate: {
      label: "Datum merken",
      title1: "Save the",
      title2: "Date",
      date: "2. Mai 2026",
      location: "Delmenhorst, Deutschland",
      quote: "Wir würden uns freuen, diesen Tag mit Ihnen zu feiern",
    },
    countdown: {
      days: "Tage",
      hours: "Std",
      minutes: "Min",
      seconds: "Sek",
    },
    story: {
      title: "Unser Thema",
      subtitle: "Ein Ehrengefäß für deinen Ruhm",
      verse:
        "Wenn nun jemand sich reinigt von solchen Leuten, der wird ein Gefäß sein zu ehrenvollem Gebrauch, geheiligt, für den Hausherrn brauchbar und zu allem guten Werk bereitet.",
      verseRef: "— 2. Timotheus 2:21 —",
    },
    donation: {
      title: "Hochzeitsliste",
      subtitle:
        "Liebe Familie, liebe Freunde,\n\nEure Anwesenheit bei unserer Hochzeit ist für uns eine große Freude.\nWenn ihr uns eure Zuneigung mit einem Geschenk zeigen möchtet, wären wir euch sehr dankbar. Ein Geldbeitrag würde sehr geschätzt werden.\n\nWir danken euch herzlich für eure Großzügigkeit und eure liebevolle Aufmerksamkeit.",
      transfer: "Überweisung",
      copied: "In die Zwischenablage kopiert",
      paypalDesc: "Scannen Sie den QR-Code oder klicken Sie auf den Link unten",
      paypalTip:
        '💡 Wählen Sie "An einen Freund senden", um Transaktionsgebühren zu vermeiden.',
      donate: "Spenden",
    },
    location: {
      label: "Der Ort",
      title: "Zeremonie &",
      titleHighlight: "Empfang",
      description:
        "Wir haben diesen besonderen Ort gewählt, um unsere Verbindung zu feiern. Ein majestätisches Ambiente im Herzen von Delmenhorst, leicht erreichbar und in der Nähe aller Annehmlichkeiten.",
      addressTitle: "Vollständige Adresse",
      directions: "Wegbeschreibung",
      parking: {
        title: "Parken",
        description:
          "Bitte denken Sie daran, auf einem der nahegelegenen Parkplätze in der Nähe des Zeremonie-Ortes zu parken: Graftwiesen, Hans-Böckler-Platz, City Parkhaus, Am Stadtwall und Hundewiese.",
      },
    },
    guestbook: {
      label: "Gästebuch",
      title: "Gästebuch",
      message:
        "Wir sind tief berührt von Ihren Wünschen, Ihren Gebeten und Ihrer Liebe. Ihre lieben Worte erfüllen unsere Herzen mit Freude und erinnern uns daran, wie gesegnet wir sind, von so einer wunderbaren Familie und solchen Freunden umgeben zu sein. Danke, dass Sie mit uns dieses Ehrengefäß zur Ehre Gottes teilen.",
      coverLabel: "Gästebuch",
      coverTitle: "Schreiben Sie uns",
      writtenBy: "Geschrieben von ",
      from: "Von",
      dateLabel: "Am",
      pageLabel: "Seite",
    },
    rsvp: {
      title: "Nachricht für das Gästebuch",
      subtitle: "Teilen Sie Ihre Wünsche und Glückwünsche für Cédric & Karelle 💍",
      nameLabel: "Ihr Vorname",
      namePlaceholder: "z.B. Max",
      messageLabel: "Ihre Nachricht",
      messagePlaceholder: "Ihre Wünsche, Glückwünsche, Gebete...",
      sending: "Senden...",
      confirm: "Senden",
      successTitle: "Vielen Dank",
      successMessage:
        "Ihre Nachricht wurde empfangen und wird in unserem Gästebuch bewahrt. 💛",
      close: "Schließen",
      errorConnection: "Verbindungsfehler.",
      errorGeneric: "Ein Fehler ist aufgetreten.",
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
          content: `Wer hätte gedacht, dass unsere Misserfolge nicht immer Misserfolge sind, sondern Sprungbretter für Erfolg und eine neue Geschichte! So fanden wir uns im August 2019, mitten im Wechsel von einem Deutschkurs-Zentrum zu einem anderen, im selben Sprachzentrum in Jaunde wieder.\nSo begann eine **uneigennützige Freundschaft**, die auf den Erfolg unserer zuvor nicht bestandenen Module ausgerichtet war! Im Laufe der Zeit brachte diese Freundschaft etwas Größeres hervor, das nun **göttliche Zustimmung** erforderte! Jeder von uns entwickelte etwas, das inzwischen unerklärlich geworden war! Doch es brauchte die Zustimmung und das Siegel unseres Eigentümers: **unseres Schöpfers**!`,
        },
        {
          id: "cedric",
          type: "testimony" as const,
          speaker: "Cédric",
          title: "Cédric",
          content: `In dieser Freundschaft wurden wir eine wahre **Stütze füreinander**.\nIch kann den Tag nicht vergessen, als mein Zimmer überflutet wurde, während wir am nächsten Tag eine Prüfung hatten. Nachdem wir zusammen gelernt und uns getrennt hatten, entdeckte ich den Zustand meines Zimmers. Trotz der Müdigkeit und dem Willen zu bestehen, legte ich mich einfach auf mein Bett und schlief ein, umgeben von Wasser.\nTief berührt von meiner Situation hast du mir am nächsten Tag Essen gebracht und mich nicht von den Umständen beunruhigen lassen. Gemeinsam haben wir das Haus geputzt. Und seit diesem Tag hast du **nie aufgehört**, die „schmutzigen Wasser“ in meinem Leben zu reinigen.\nTrotz meiner Mängel bist du immer an meiner Seite geblieben. Schwierige Situationen hätten dich vertreiben können, aber du hast mich deine Abwesenheit nie spüren lassen.\nDanke für deine Unterstützung, deine **Treue** und deine **Loyalität**. 💫`,
        },
        {
          id: "karelle",
          type: "testimony" as const,
          speaker: "Karelle",
          title: "Karelle",
          content: `Sehr beeindruckt von seiner Größe und seiner körperlichen Schönheit auf den ersten Blick, konnte ich die Neugier nicht unterdrücken, seinen Charakter und seine Person kennenzulernen! Dennoch wandte ich mich dem **Gebet** zu, um jede Unannehmlichkeit und vor allem Ungehorsam zu vermeiden. So stellte ich Gott mehrmals auf die Probe und bat um Seine Bestätigung. Er tat es durch verschiedene Mittel: Zeichen, Sein Wort und Träume! Aber das reichte mir nicht immer! Cédric musste sich beweisen! Die Zeit verging und ich entdeckte einen Mann voller Liebe, respektvoll, ehrgeizig und vor allem in den Herrn verliebt. Im Austausch bemerkte ich, dass er das **fehlende Puzzleteil** meines Schicksals war! Ich bin Gott **unendlich dankbar** 🙏`,
        },
        {
          id: "croissance",
          type: "narrative" as const,
          title: "Das Wachstum",
          content: `Wir danken Gott für Seine Liebe zu uns. In dieser Liebe wachsen wir, lernen wir uns jeden Tag zu bewahren, und sehen bereits die Früchte, die weiter reifen.\nWir erkennen, dass die Entscheidung, **Gott gemeinsam zu dienen**, uns zutiefst wachsen lässt: in unserem Charakter, in der Liebe zu anderen und vor allem in dem, was wir füreinander werden.\nMit Gott werden unsere Verbesserungsbereiche schrittweise erkannt und bearbeitet. Der Dienst an der Seite erfahrenerer Menschen hilft uns auch, einander besser kennenzulernen und unsere Beziehung stetig zu stärken.\nWir erkennen an, dass Seine Gegenwart das **Fundament unserer Entwicklung** und unserer Einheit ist und unseren gemeinsamen Weg weiterhin formt. 💫`,
        },
        {
          id: "doigt-de-dieu",
          type: "narrative" as const,
          title: "Gottes Hand",
          date: "Dezember 2025",
          content: `Wie kann man über uns sprechen, ohne die Jahresendfeier 2025 zu erwähnen?\nUrsprünglich hatte jeder von uns einen ganz anderen Plan. Aber Gott hat es anders entschieden. Wir empfingen die Überzeugung, diese **Jahresendfeier in Seiner Gegenwart** zu verbringen.\nWir entschieden uns, unseren Mentoren für eine Woche zu folgen, zu Füßen des Herrn. In dieser Atmosphäre des Gebets und der Hingabe erhielten wir die Bestätigung, unsere **Beziehung offiziell zu machen**.\nNach dieser kostbaren Zeit verlobten wir uns offiziell vor unseren Brüdern und Schwestern, nach einem „Ja, ich will“, das in diesem Restaurant ausgesprochen wurde.\nAm darauffolgenden Sonntag beteten der Mann Gottes und die Gemeinde für uns und besiegelten so unsere Verlobung. Wir wurden **gesegnet und gestärkt**.\nDieser Moment war bedeutend für uns — eine **klare Antwort von Gottes Hand**.\nDanke, Herr. 🙏✨`,
        },
        {
          id: "mariage",
          type: "event" as const,
          title: "Die Hochzeit",
          date: "02.05.2026",
          content: `Wir sind Gott dankbar für unsere Familien. Ihr habt uns akzeptiert und **unterstützt** uns weiterhin in unserer Beziehung, und wir sehen es jeden Tag durch eure Taten und euren Rat.\nWir danken auch unseren Mentoren sowie allen, die uns bei dieser Vorbereitung unterstützen. Es wäre schwierig, euch alle zu nennen, denn es sind viele, die uns jeden Tag auf diesem Weg ermutigen.\nDer 02.05.2026 ist ein **Tag der Freude**, auf den wir uns vorbereiten und den wir gerne mit euch teilen werden.\nDanke, dass ihr in diesem kostbaren Moment an unserer Seite seid.`,
        },
      ],
      dressCode: {
        title: "Kleiderordnung & Feierlichkeit",
        intro:
          "Um die Schönheit und Feierlichkeit dieser Verbindung zu ehren, haben wir",
        royalBlue: "Königsblau",
        and: ",",
        gold: "Weiß",
        andGold: "und",
        goldColor: "Gold",
        asColors: "als Farben der Zeremonie gewählt.",
        verse:
          "So will ich nun, dass die Männer beten an allen Orten und aufheben heilige Hände ohne Zorn und Zweifel; desgleichen, dass die Frauen in schicklicher Kleidung sich schmücken mit Anstand und Besonnenheit, nicht mit Haarflechten und Gold oder Perlen oder kostbarem Gewand",
        verseRef: "— 1. Timotheus 2:8-9 —",
        closing:
          "Wir bitten Sie, ein **dezentes Outfit** zu bevorzugen, geprägt von **Bescheidenheit** und **Einfachheit**, **damit** dieser Moment den Werten entspricht, die wir feiern. Wir danken Ihnen aufrichtig, dass Sie durch Ihre Anwesenheit und Eleganz zur Anmut dieses außergewöhnlichen Tages beitragen. 💙✨",
      },
    },
  },
};

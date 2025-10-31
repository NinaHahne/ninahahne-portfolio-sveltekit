<script lang="ts">
  import { contact } from '$lib/data/contact';
  import HomeButton from '$lib/components/HomeButton.svelte';
</script>

<svelte:head>
  <title>Datenschutz | Nina Hahne</title>
</svelte:head>

<HomeButton />

<section class="mx-auto mt-4 rounded-md bg-light-gray-80 px-4 py-8">
  <section class="mx-auto max-w-2xl leading-relaxed text-dusty-brown">
    <h1 class="mb-4 text-3xl font-bold">Datenschutz&shy;erklärung</h1>

    <p>
      Verantwortlich für die Datenverarbeitung:
      <br />
      <strong>{contact.name}</strong><br />
      {contact.street}<br />
      {contact.city}<br />
      Deutschland <br />
      E-Mail: <a href="mailto:{contact.email}" class="underline hover:text-stone">{contact.email}</a>
    </p>

    <h2 class="mt-6 text-xl font-bold">Allgemeines</h2>
    <p>
      Diese Website dient ausschließlich der Präsentation persönlicher Projekte und erhebt keine personen&shy;bezogenen
      Daten automatisch. Es werden keine Cookies gesetzt und keine Tracking-Dienste verwendet.
    </p>

    <h2 class="mt-6 text-xl font-bold">Server-Logfiles</h2>
    <p>
      Beim Zugriff auf diese Website werden automatisch technische Informationen (z. B. Browsertyp, Betriebssystem,
      Uhrzeit der Serveranfrage) erfasst. Diese Daten sind nicht personenbezogen und dienen ausschließlich der
      Fehleranalyse.
    </p>

    <h2 class="mt-6 text-xl font-bold">Externe Links</h2>
    <p>
      Diese Website enthält Links zu externen Plattformen (z. B. GitHub, LinkedIn). Für deren Inhalte und
      Daten&shy;schutz&shy;bestimmungen ist ausschließlich der jeweilige Betreiber verantwortlich.
    </p>

    <h2 class="mt-6 text-xl font-bold">Schriftarten</h2>
    <p>
      Alle verwendeten Schrift&shy;arten sind lokal eingebunden. Es erfolgt kein Abruf von Google Fonts oder anderen
      externen Diensten.
    </p>

    <h2 class="mt-6 text-xl font-bold">Rechte der Nutzer:innen</h2>
    <p>
      Sie haben das Recht auf Auskunft, Berichtigung oder Löschung Ihrer personen&shy;bezogenen Daten. Hierzu genügt
      eine formlose Anfrage per E-Mail an <a href="mailto:{contact.email}" class="underline hover:text-stone"
        >{contact.email}</a
      >.
    </p>

    <hr class="my-6 border-t border-dusty-brown/30" />

    <h1 class="mb-4 text-2xl font-bold">Privacy Policy (English Translation)</h1>

    <p>
      Responsible for data processing:<br />
      <strong>{contact.name}</strong><br />
      {contact.street}<br />
      {contact.city}<br />
      Germany <br />
      E-mail: <a href="mailto:{contact.email}" class="underline hover:text-stone">{contact.email}</a>
    </p>

    <p class="mt-4">
      This website does not collect or store personal data, does not use cookies, and does not employ analytics or
      tracking services. Server logs are stored automatically by the hosting provider and contain non-personal technical
      data only (browser type, OS, time of access).
    </p>

    <p class="mt-4">
      All fonts are served locally. External links (e.g., GitHub, LinkedIn) are subject to the privacy policies of their
      respective providers.
    </p>
  </section>
</section>

<script lang="ts">
  import { contact } from '$lib/data/contact';
  import HomeButton from '$lib/components/HomeButton.svelte';
</script>

<svelte:head>
  <title>Imprint | Nina Hahne</title>
</svelte:head>

<HomeButton />

<section class="mx-auto mt-4 rounded-md bg-light-gray-80 px-4 py-8">
  <section class="mx-auto max-w-2xl leading-relaxed text-dusty-brown">
    <h1 class="mb-4 text-3xl font-bold">Impressum</h1>

    <p>Angaben gemäß § 5 TMG:</p>
    <p class="mt-2">
      <strong>{contact.name}</strong><br />
      {contact.street}<br />
      {contact.city}<br />
      Deutschland
    </p>

    <h2 class="mt-6 text-xl font-bold">Kontakt</h2>
    <p>E-Mail: <a href="mailto:{contact.email}" class="underline">{contact.email}</a></p>

    <h2 class="mt-6 text-xl font-bold">Verantwortlich für den Inhalt</h2>
    <p>
      Verantwortlich gemäß § 18 Abs. 2 MStV:<br />
      Nina Hahne, Adresse wie oben
    </p>

    <hr class="my-6 border-t border-dusty-brown/30" />

    <h1 class="mb-4 text-2xl font-bold">Imprint (English Translation)</h1>
    <p>Information pursuant to § 5 German Telemedia Act (TMG):</p>
    <p class="mt-2">
      <strong>{contact.name}</strong><br />
      {contact.street}<br />
      {contact.city}<br />
      Germany
    </p>

    <h2 class="mt-6 text-xl font-bold">Contact</h2>
    <p>E-mail: <a href="mailto:{contact.email}" class="underline">{contact.email}</a></p>

    <h2 class="mt-6 text-xl font-bold">Responsible for Content</h2>
    <p>Responsible according to § 18 (2) MStV: Nina Hahne (address as above)</p>

    <hr class="my-6 border-t border-dusty-brown/30" />

    <h1 class="mb-4 text-2xl font-bold">Credits</h1>
    <p>
      Portrait / Logo illustration by
      <a href="https://www.instagram.com/monsieurlefitz/" target="_blank" rel="noopener" class="underline">
        Matthias Pflügner
      </a>.
    </p>
  </section>
</section>

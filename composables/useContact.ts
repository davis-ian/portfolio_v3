export const useContact = () => {
  const email = computed(() => {
    const user = "hello.iandavis";
    const domain = "gmail.com";
    return `${user}@${domain}`;
  });

  const emailHref = computed(() => `mailto:${email.value}`);

  return {
    email,
    emailHref,
  };
};

export const getEnvVar = <T>(key: string, safetyVar?: T) => {
  const envVar = process.env[key];

  console.log(envVar, process.env);

  if (envVar) {
    return envVar;
  }
  return safetyVar ? safetyVar : "";
};

import { generate } from "@graphql-codegen/cli";

// const filesToType = ["./src/app-frame/header/search/GetUserInfo.graphql"];

// This will be used once the backend is built out and we won't be using Mock Service Worker

const filesToType = "./src/**/*.graphql";

async function genTypes() {
  await generate(
    {
      schema: "http://127.0.0.1:4000/graphql",
      generates: {
        [process.cwd() + "/src/types/generated/operations.ts"]: {
          documents: filesToType,
          plugins: [
            "typescript-operations",
            "typescript",
            "typescript-react-apollo",
          ],
          config: {
            onlyOperationTypes: true,
            // strictScalars: true,
            scalars: {
              APIDate: "string",
              APIDateTime: "string",
              BigCents: "number",
              Cents: "number",
              Dollars: "number",
              JSON: "object",
              PhoneNumberRaw: "string",
            },
          },
        },
      },
    },
    true
  );
}

genTypes();

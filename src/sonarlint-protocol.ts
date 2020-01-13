/* --------------------------------------------------------------------------------------------
 * SonarLint for VisualStudio Code
 * Copyright (C) 2017-2020 SonarSource SA
 * sonarlint@sonarsource.com
 * Licensed under the LGPLv3 License. See LICENSE.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

/**
* **IMPORTANT** this module should not depend on `vscode-languageserver` only protocol and types
*/
import * as lsp from 'vscode-languageserver-protocol';

export namespace GetJavaConfigRequest {
    export const type = new lsp.RequestType<string, GetJavaConfigResponse, void, void>('sonarlint/getJavaConfig');
}

export namespace IsJavaTestFileRequest {
    export const type = new lsp.RequestType<string, boolean, void, void>('sonarlint/isJavaTestFile');
}

export interface GetJavaConfigResponse {
    projectRoot: string,
    level: string
    classpath: string[]
    testClasspath: string[]
}
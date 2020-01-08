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
    export const type = new lsp.RequestType<string, JavaConfigResponse, void, void>('sonarlint/getJavaConfig');
}

export interface JavaConfigResponse {
    level: string
    classpath: string[]
    testClasspath: string[]
}
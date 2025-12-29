import * as _et from 'pareto-core-interface'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Diagnostic_Severity = _i_core._T_State_Group<null, 
    | readonly ['error', null]
    | readonly ['warning', null]
    | readonly ['information', null]
    | readonly ['hint', null]
>

export type _T_Position = {
    readonly 'line': number
    readonly 'character': number
}

export type _T_Range = {
    readonly 'start': _T_Position
    readonly 'end': _T_Position
}

export type _T_Diagnostic = {
    readonly 'severity': _T_Diagnostic_Severity
    readonly 'range': _T_Range
    readonly 'message': string
    readonly 'related information': _et.Optional_Value<_i_core._T_List<null, {
        readonly 'location': {
            readonly 'file path': string
            readonly 'range': _T_Range
        }
        readonly 'message': string
    }>>
}

export type _T_Diagnostics = _i_core._T_List<null, _T_Diagnostic>

export type _T_Document_Data = {
    readonly 'file path': string
    readonly 'content': string
}

export type _T_Hover_Texts = _i_core._T_List<null, string>

export type _T_Optional_Hover_Texts = _et.Optional_Value<_T_Hover_Texts>

export type _T_On_Hover_Result = {
    readonly 'contents': {
        readonly 'hover texts': _T_Optional_Hover_Texts
    }
}

export type _T_Completion_Items = _i_core._T_List<null, {
    readonly 'label': string
    readonly 'insert text': string
    readonly 'documentation': string
}>

export type _T_Optional_Completion_Items = _et.Optional_Value<_T_Completion_Items>

export type _T_On_Completion_Result = {
    readonly 'completion items': _T_Completion_Items
}

export type _T_On_Validate_Document_Result = {
    readonly 'diagnostics': _T_Diagnostics
}

export type _T_Convert_To_JSON_Parameters = {
    readonly 'content': string
}

export type _T_Seal_Parameters = {
    readonly 'content': string
}

export type _T_On_Completion_Parameters = {
    readonly 'content': string
    readonly 'file path': string
    readonly 'position': _T_Position
    readonly 'indent': string
}

export type _T_On_Hover_Parameters = {
    readonly 'content': string
    readonly 'file path': string
    readonly 'position': _T_Position
}

export type _T_Validate_Document_Parameters = {
    readonly 'content': string
    readonly 'file path': string
    readonly 'tab size': number
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Diagnostic_Severity = _T_Diagnostic_Severity

export type Position = _T_Position

export type Range = _T_Range

export type Diagnostic = _T_Diagnostic

export type Diagnostics = _T_Diagnostics

export type Document_Data = _T_Document_Data

export type Hover_Texts = _T_Hover_Texts

export type Optional_Hover_Texts = _T_Optional_Hover_Texts

export type On_Hover_Result = _T_On_Hover_Result

export type Completion_Items = _T_Completion_Items

export type Optional_Completion_Items = _T_Optional_Completion_Items

export type On_Completion_Result = _T_On_Completion_Result

export type On_Validate_Document_Result = _T_On_Validate_Document_Result

export type Convert_To_JSON_Parameters = _T_Convert_To_JSON_Parameters

export type Seal_Parameters = _T_Seal_Parameters

export type On_Completion_Parameters = _T_On_Completion_Parameters

export type On_Hover_Parameters = _T_On_Hover_Parameters

export type Validate_Document_Parameters = _T_Validate_Document_Parameters

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Diagnostic_Severity {
    
    export namespace SG {
        
        export namespace error {
        }
        export type error = null
        
        export namespace warning {
        }
        export type warning = null
        
        export namespace information {
        }
        export type information = null
        
        export namespace hint {
        }
        export type hint = null
    }
    export type SG = 
        | readonly ['error', null]
        | readonly ['warning', null]
        | readonly ['information', null]
        | readonly ['hint', null]
}

export namespace _T_Position {
    export type line = number
    export type character = number
}

export namespace _T_Range {
    
    export namespace start {
    }
    export type start = _T_Position
    
    export namespace end {
    }
    export type end = _T_Position
}

export namespace _T_Diagnostic {
    
    export namespace severity {
    }
    export type severity = _T_Diagnostic_Severity
    
    export namespace range {
    }
    export type range = _T_Range
    export type message = string
    
    export namespace related_information {
        
        export namespace O {
            
            export namespace L {
                
                export namespace location {
                    export type file_path = string
                    
                    export namespace range {
                    }
                    export type range = _T_Range
                }
                export type location = {
                    readonly 'file path': string
                    readonly 'range': _T_Range
                }
                export type message = string
            }
            export type L = {
                readonly 'location': {
                    readonly 'file path': string
                    readonly 'range': _T_Range
                }
                readonly 'message': string
            }
        }
        export type O = _i_core._T_List<null, {
            readonly 'location': {
                readonly 'file path': string
                readonly 'range': _T_Range
            }
            readonly 'message': string
        }>
    }
    export type related_information = _et.Optional_Value<_i_core._T_List<null, {
        readonly 'location': {
            readonly 'file path': string
            readonly 'range': _T_Range
        }
        readonly 'message': string
    }>>
}

export namespace _T_Diagnostics {
    
    export namespace L {
    }
    export type L = _T_Diagnostic
}

export namespace _T_Document_Data {
    export type file_path = string
    export type content = string
}

export namespace _T_Hover_Texts {
    export type L = string
}

export namespace _T_Optional_Hover_Texts {
    
    export namespace O {
    }
    export type O = _T_Hover_Texts
}

export namespace _T_On_Hover_Result {
    
    export namespace contents {
        
        export namespace hover_texts {
        }
        export type hover_texts = _T_Optional_Hover_Texts
    }
    export type contents = {
        readonly 'hover texts': _T_Optional_Hover_Texts
    }
}

export namespace _T_Completion_Items {
    
    export namespace L {
        export type label = string
        export type insert_text = string
        export type documentation = string
    }
    export type L = {
        readonly 'label': string
        readonly 'insert text': string
        readonly 'documentation': string
    }
}

export namespace _T_Optional_Completion_Items {
    
    export namespace O {
    }
    export type O = _T_Completion_Items
}

export namespace _T_On_Completion_Result {
    
    export namespace completion_items {
    }
    export type completion_items = _T_Completion_Items
}

export namespace _T_On_Validate_Document_Result {
    
    export namespace diagnostics {
    }
    export type diagnostics = _T_Diagnostics
}

export namespace _T_Convert_To_JSON_Parameters {
    export type content = string
}

export namespace _T_Seal_Parameters {
    export type content = string
}

export namespace _T_On_Completion_Parameters {
    export type content = string
    export type file_path = string
    
    export namespace position {
    }
    export type position = _T_Position
    export type indent = string
}

export namespace _T_On_Hover_Parameters {
    export type content = string
    export type file_path = string
    
    export namespace position {
    }
    export type position = _T_Position
}

export namespace _T_Validate_Document_Parameters {
    export type content = string
    export type file_path = string
    export type tab_size = number
}

// *** ALIASES FOR NESTED TYPES

export namespace Diagnostic_Severity {
    
    export namespace SG {
        
        export namespace error {
        }
        export type error = null
        
        export namespace warning {
        }
        export type warning = null
        
        export namespace information {
        }
        export type information = null
        
        export namespace hint {
        }
        export type hint = null
    }
    export type SG = 
        | readonly ['error', null]
        | readonly ['warning', null]
        | readonly ['information', null]
        | readonly ['hint', null]
}

export namespace Position {
    export type line = number
    export type character = number
}

export namespace Range {
    
    export namespace start {
    }
    export type start = _T_Position
    
    export namespace end {
    }
    export type end = _T_Position
}

export namespace Diagnostic {
    
    export namespace severity {
    }
    export type severity = _T_Diagnostic_Severity
    
    export namespace range {
    }
    export type range = _T_Range
    export type message = string
    
    export namespace related_information {
        
        export namespace O {
            
            export namespace L {
                
                export namespace location {
                    export type file_path = string
                    
                    export namespace range {
                    }
                    export type range = _T_Range
                }
                export type location = {
                    readonly 'file path': string
                    readonly 'range': _T_Range
                }
                export type message = string
            }
            export type L = {
                readonly 'location': {
                    readonly 'file path': string
                    readonly 'range': _T_Range
                }
                readonly 'message': string
            }
        }
        export type O = _i_core._T_List<null, {
            readonly 'location': {
                readonly 'file path': string
                readonly 'range': _T_Range
            }
            readonly 'message': string
        }>
    }
    export type related_information = _et.Optional_Value<_i_core._T_List<null, {
        readonly 'location': {
            readonly 'file path': string
            readonly 'range': _T_Range
        }
        readonly 'message': string
    }>>
}

export namespace Diagnostics {
    
    export namespace L {
    }
    export type L = _T_Diagnostic
}

export namespace Document_Data {
    export type file_path = string
    export type content = string
}

export namespace Hover_Texts {
    export type L = string
}

export namespace Optional_Hover_Texts {
    
    export namespace O {
    }
    export type O = _T_Hover_Texts
}

export namespace On_Hover_Result {
    
    export namespace contents {
        
        export namespace hover_texts {
        }
        export type hover_texts = _T_Optional_Hover_Texts
    }
    export type contents = {
        readonly 'hover texts': _T_Optional_Hover_Texts
    }
}

export namespace Completion_Items {
    
    export namespace L {
        export type label = string
        export type insert_text = string
        export type documentation = string
    }
    export type L = {
        readonly 'label': string
        readonly 'insert text': string
        readonly 'documentation': string
    }
}

export namespace Optional_Completion_Items {
    
    export namespace O {
    }
    export type O = _T_Completion_Items
}

export namespace On_Completion_Result {
    
    export namespace completion_items {
    }
    export type completion_items = _T_Completion_Items
}

export namespace On_Validate_Document_Result {
    
    export namespace diagnostics {
    }
    export type diagnostics = _T_Diagnostics
}

export namespace Convert_To_JSON_Parameters {
    export type content = string
}

export namespace Seal_Parameters {
    export type content = string
}

export namespace On_Completion_Parameters {
    export type content = string
    export type file_path = string
    
    export namespace position {
    }
    export type position = _T_Position
    export type indent = string
}

export namespace On_Hover_Parameters {
    export type content = string
    export type file_path = string
    
    export namespace position {
    }
    export type position = _T_Position
}

export namespace Validate_Document_Parameters {
    export type content = string
    export type file_path = string
    export type tab_size = number
}

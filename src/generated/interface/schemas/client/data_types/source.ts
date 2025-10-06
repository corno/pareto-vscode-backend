import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_Format_Error = {
    readonly 'message': string
}

export type _T_Format_Options = {
    readonly 'indent string': string
    readonly 'insert spaces': boolean
    readonly 'preserve commas': boolean
    readonly 'preserve delimiters': boolean
    readonly 'preserve final newline state': boolean
}

export type _T_Format_Parameters = {
    readonly 'content': string
    readonly 'options': _T_Format_Options
}

export type _T_Format_Result = _i_core._T_List<null, _T_Text_Edit>

export type _T_Position = {
    readonly 'character': number
    readonly 'line': number
}

export type _T_Range = {
    readonly 'end': _T_Position
    readonly 'start': _T_Position
}

export type _T_Replace = {
    readonly 'range': _T_Range
    readonly 'text': string
}

export type _T_Sort_Alphabetically_Parameters = {
    readonly 'content': string
    readonly 'position': _T_Position
}

export type _T_Text_Edit = _i_core._T_State_Group<null, 
    | readonly ['delete', {
        readonly 'range': _T_Range
    }]
    | readonly ['insert', {
        readonly 'location': _T_Position
        readonly 'text': string
    }]
    | readonly ['replace', _T_Replace]
>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Format_Error = _T_Format_Error

export type Format_Options = _T_Format_Options

export type Format_Parameters = _T_Format_Parameters

export type Format_Result = _T_Format_Result

export type Position = _T_Position

export type Range = _T_Range

export type Replace = _T_Replace

export type Sort_Alphabetically_Parameters = _T_Sort_Alphabetically_Parameters

export type Text_Edit = _T_Text_Edit

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Format_Error {
    export type message = string
}

export namespace _T_Format_Options {
    export type indent_string = string
    export type insert_spaces = boolean
    export type preserve_commas = boolean
    export type preserve_delimiters = boolean
    export type preserve_final_newline_state = boolean
}

export namespace _T_Format_Parameters {
    export type content = string
    
    export namespace options {
    }
    export type options = _T_Format_Options
}

export namespace _T_Format_Result {
    
    export namespace L {
    }
    export type L = _T_Text_Edit
}

export namespace _T_Position {
    export type character = number
    export type line = number
}

export namespace _T_Range {
    
    export namespace end {
    }
    export type end = _T_Position
    
    export namespace start {
    }
    export type start = _T_Position
}

export namespace _T_Replace {
    
    export namespace range {
    }
    export type range = _T_Range
    export type text = string
}

export namespace _T_Sort_Alphabetically_Parameters {
    export type content = string
    
    export namespace position {
    }
    export type position = _T_Position
}

export namespace _T_Text_Edit {
    
    export namespace SG {
        
        export namespace _delete {
            
            export namespace range {
            }
            export type range = _T_Range
        }
        export type _delete = {
            readonly 'range': _T_Range
        }
        
        export namespace insert {
            
            export namespace location {
            }
            export type location = _T_Position
            export type text = string
        }
        export type insert = {
            readonly 'location': _T_Position
            readonly 'text': string
        }
        
        export namespace replace {
        }
        export type replace = _T_Replace
    }
    export type SG = 
        | readonly ['delete', {
            readonly 'range': _T_Range
        }]
        | readonly ['insert', {
            readonly 'location': _T_Position
            readonly 'text': string
        }]
        | readonly ['replace', _T_Replace]
}

// *** ALIASES FOR NESTED TYPES

export namespace Format_Error {
    export type message = string
}

export namespace Format_Options {
    export type indent_string = string
    export type insert_spaces = boolean
    export type preserve_commas = boolean
    export type preserve_delimiters = boolean
    export type preserve_final_newline_state = boolean
}

export namespace Format_Parameters {
    export type content = string
    
    export namespace options {
    }
    export type options = _T_Format_Options
}

export namespace Format_Result {
    
    export namespace L {
    }
    export type L = _T_Text_Edit
}

export namespace Position {
    export type character = number
    export type line = number
}

export namespace Range {
    
    export namespace end {
    }
    export type end = _T_Position
    
    export namespace start {
    }
    export type start = _T_Position
}

export namespace Replace {
    
    export namespace range {
    }
    export type range = _T_Range
    export type text = string
}

export namespace Sort_Alphabetically_Parameters {
    export type content = string
    
    export namespace position {
    }
    export type position = _T_Position
}

export namespace Text_Edit {
    
    export namespace SG {
        
        export namespace _delete {
            
            export namespace range {
            }
            export type range = _T_Range
        }
        export type _delete = {
            readonly 'range': _T_Range
        }
        
        export namespace insert {
            
            export namespace location {
            }
            export type location = _T_Position
            export type text = string
        }
        export type insert = {
            readonly 'location': _T_Position
            readonly 'text': string
        }
        
        export namespace replace {
        }
        export type replace = _T_Replace
    }
    export type SG = 
        | readonly ['delete', {
            readonly 'range': _T_Range
        }]
        | readonly ['insert', {
            readonly 'location': _T_Position
            readonly 'text': string
        }]
        | readonly ['replace', _T_Replace]
}

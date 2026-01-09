import * as _pi from 'pareto-core-interface'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Position = {
    readonly 'line': number
    readonly 'character': number
}

export type _T_Range = {
    readonly 'start': _T_Position
    readonly 'end': _T_Position
}

export type _T_Format_Options = {
    readonly 'insert spaces': boolean
    readonly 'preserve delimiters': boolean
    readonly 'preserve final newline state': boolean
    readonly 'preserve commas': boolean
    readonly 'indent string': string
}

export type _T_Replace = {
    readonly 'range': _T_Range
    readonly 'text': string
}

export type _T_Text_Edit = _i_core._T_State_Group<null, 
    | readonly ['replace', _T_Replace]
    | readonly ['delete', {
        readonly 'range': _T_Range
    }]
    | readonly ['insert', {
        readonly 'location': _T_Position
        readonly 'text': string
    }]
>

export type _T_Format_Result = _i_core._T_List<null, _T_Text_Edit>

export type _T_Format_Error = {
    readonly 'message': string
}

export type _T_Format_Parameters = {
    readonly 'options': _T_Format_Options
}

export type _T_Sort_Alphabetically_Parameters = {
    readonly 'position': _T_Position
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Position = _T_Position

export type Range = _T_Range

export type Format_Options = _T_Format_Options

export type Replace = _T_Replace

export type Text_Edit = _T_Text_Edit

export type Format_Result = _T_Format_Result

export type Format_Error = _T_Format_Error

export type Format_Parameters = _T_Format_Parameters

export type Sort_Alphabetically_Parameters = _T_Sort_Alphabetically_Parameters

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

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

export namespace _T_Format_Options {
    export type insert_spaces = boolean
    export type preserve_delimiters = boolean
    export type preserve_final_newline_state = boolean
    export type preserve_commas = boolean
    export type indent_string = string
}

export namespace _T_Replace {
    
    export namespace range {
    }
    export type range = _T_Range
    export type text = string
}

export namespace _T_Text_Edit {
    
    export namespace SG {
        
        export namespace replace {
        }
        export type replace = _T_Replace
        
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
    }
    export type SG = 
        | readonly ['replace', _T_Replace]
        | readonly ['delete', {
            readonly 'range': _T_Range
        }]
        | readonly ['insert', {
            readonly 'location': _T_Position
            readonly 'text': string
        }]
}

export namespace _T_Format_Result {
    
    export namespace L {
    }
    export type L = _T_Text_Edit
}

export namespace _T_Format_Error {
    export type message = string
}

export namespace _T_Format_Parameters {
    
    export namespace options {
    }
    export type options = _T_Format_Options
}

export namespace _T_Sort_Alphabetically_Parameters {
    
    export namespace position {
    }
    export type position = _T_Position
}

// *** ALIASES FOR NESTED TYPES

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

export namespace Format_Options {
    export type insert_spaces = boolean
    export type preserve_delimiters = boolean
    export type preserve_final_newline_state = boolean
    export type preserve_commas = boolean
    export type indent_string = string
}

export namespace Replace {
    
    export namespace range {
    }
    export type range = _T_Range
    export type text = string
}

export namespace Text_Edit {
    
    export namespace SG {
        
        export namespace replace {
        }
        export type replace = _T_Replace
        
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
    }
    export type SG = 
        | readonly ['replace', _T_Replace]
        | readonly ['delete', {
            readonly 'range': _T_Range
        }]
        | readonly ['insert', {
            readonly 'location': _T_Position
            readonly 'text': string
        }]
}

export namespace Format_Result {
    
    export namespace L {
    }
    export type L = _T_Text_Edit
}

export namespace Format_Error {
    export type message = string
}

export namespace Format_Parameters {
    
    export namespace options {
    }
    export type options = _T_Format_Options
}

export namespace Sort_Alphabetically_Parameters {
    
    export namespace position {
    }
    export type position = _T_Position
}

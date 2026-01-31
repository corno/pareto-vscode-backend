
import * as _pi from "pareto-core/dist/interface"

export namespace Position_ {
    
    export type line = number
    
    export type character = number
    
}

export type Position_ = {
    readonly 'line': Position_.line
    readonly 'character': Position_.character
}

export namespace Range_ {
    
    export type start = Position_
    
    export type end = Position_
    
}

export type Range_ = {
    readonly 'start': Range_.start
    readonly 'end': Range_.end
}

export namespace Format_Options_ {
    
    export type insert_spaces = boolean
    
    export type preserve_delimiters = boolean
    
    export type preserve_final_newline_state = boolean
    
    export type preserve_commas = boolean
    
    export type indent_string = string
    
}

export type Format_Options_ = {
    readonly 'insert spaces': Format_Options_.insert_spaces
    readonly 'preserve delimiters': Format_Options_.preserve_delimiters
    readonly 'preserve final newline state': Format_Options_.preserve_final_newline_state
    readonly 'preserve commas': Format_Options_.preserve_commas
    readonly 'indent string': Format_Options_.indent_string
}

export namespace Text_Edit_ {
    
    export type replace = Replace_
    
    export namespace delete_ {
        
        export type range = Range_
        
    }
    
    export type delete_ = {
        readonly 'range': delete_.range
    }
    
    export namespace insert {
        
        export type location = Position_
        
        export type text = string
        
    }
    
    export type insert = {
        readonly 'location': insert.location
        readonly 'text': insert.text
    }
    
}

export type Text_Edit_ = 
    | readonly ['replace', Text_Edit_.replace]
    | readonly ['delete', Text_Edit_.delete_]
    | readonly ['insert', Text_Edit_.insert]

export namespace Replace_ {
    
    export type range = Range_
    
    export type text = string
    
}

export type Replace_ = {
    readonly 'range': Replace_.range
    readonly 'text': Replace_.text
}

export namespace Format_Result_ {
    
    export type L = Text_Edit_
    
}

export type Format_Result_ = _pi.List<Format_Result_.L>

export namespace Format_Error_ {
    
    export type message = string
    
}

export type Format_Error_ = {
    readonly 'message': Format_Error_.message
}

export namespace Format_Parameters_ {
    
    export type options = Format_Options_
    
}

export type Format_Parameters_ = {
    readonly 'options': Format_Parameters_.options
}

export namespace Sort_Alphabetically_Parameters_ {
    
    export type position = Position_
    
}

export type Sort_Alphabetically_Parameters_ = {
    readonly 'position': Sort_Alphabetically_Parameters_.position
}

export { 
    Position_ as Position, 
    Range_ as Range, 
    Format_Options_ as Format_Options, 
    Text_Edit_ as Text_Edit, 
    Replace_ as Replace, 
    Format_Result_ as Format_Result, 
    Format_Error_ as Format_Error, 
    Format_Parameters_ as Format_Parameters, 
    Sort_Alphabetically_Parameters_ as Sort_Alphabetically_Parameters, 
}

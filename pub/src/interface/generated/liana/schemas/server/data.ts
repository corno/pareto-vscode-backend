
import * as _pi from 'pareto-core/dist/interface'

export namespace Diagnostic_Severity_ {
    
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

export type Diagnostic_Severity_ = 
    | readonly ['error', Diagnostic_Severity_.error]
    | readonly ['warning', Diagnostic_Severity_.warning]
    | readonly ['information', Diagnostic_Severity_.information]
    | readonly ['hint', Diagnostic_Severity_.hint]

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

export namespace Diagnostic_ {
    
    export type severity = Diagnostic_Severity_
    
    export type range = Range_
    
    export type message = string
    
    export namespace related_information {
        
        export namespace O {
            
            export namespace L {
                
                export namespace location {
                    
                    export type file_path = string
                    
                    export type range = Range_
                    
                }
                
                export type location = {
                    readonly 'file path': location.file_path
                    readonly 'range': location.range
                }
                
                export type message = string
                
            }
            
            export type L = {
                readonly 'location': L.location
                readonly 'message': L.message
            }
            
        }
        
        export type O = _pi.List<O.L>
        
    }
    
    export type related_information = _pi.Optional_Value<related_information.O>
    
}

export type Diagnostic_ = {
    readonly 'severity': Diagnostic_.severity
    readonly 'range': Diagnostic_.range
    readonly 'message': Diagnostic_.message
    readonly 'related information': Diagnostic_.related_information
}

export namespace Diagnostics_ {
    
    export type L = Diagnostic_
    
}

export type Diagnostics_ = _pi.List<Diagnostics_.L>

export namespace Document_Data_ {
    
    export type file_path = string
    
    export type content = string
    
}

export type Document_Data_ = {
    readonly 'file path': Document_Data_.file_path
    readonly 'content': Document_Data_.content
}

export namespace Hover_Texts_ {
    
    export type L = string
    
}

export type Hover_Texts_ = _pi.List<Hover_Texts_.L>

export namespace Optional_Hover_Texts_ {
    
    export type O = Hover_Texts_
    
}

export type Optional_Hover_Texts_ = _pi.Optional_Value<Optional_Hover_Texts_.O>

export namespace On_Hover_Result_ {
    
    export namespace contents {
        
        export type hover_texts = Optional_Hover_Texts_
        
    }
    
    export type contents = {
        readonly 'hover texts': contents.hover_texts
    }
    
}

export type On_Hover_Result_ = {
    readonly 'contents': On_Hover_Result_.contents
}

export namespace Completion_Items_ {
    
    export namespace L {
        
        export type label = string
        
        export type insert_text = string
        
        export type documentation = string
        
    }
    
    export type L = {
        readonly 'label': L.label
        readonly 'insert text': L.insert_text
        readonly 'documentation': L.documentation
    }
    
}

export type Completion_Items_ = _pi.List<Completion_Items_.L>

export namespace Optional_Completion_Items_ {
    
    export type O = Completion_Items_
    
}

export type Optional_Completion_Items_ = _pi.Optional_Value<Optional_Completion_Items_.O>

export namespace On_Completion_Result_ {
    
    export type completion_items = Completion_Items_
    
}

export type On_Completion_Result_ = {
    readonly 'completion items': On_Completion_Result_.completion_items
}

export namespace On_Validate_Document_Result_ {
    
    export type diagnostics = Diagnostics_
    
}

export type On_Validate_Document_Result_ = {
    readonly 'diagnostics': On_Validate_Document_Result_.diagnostics
}

export namespace Convert_To_JSON_Parameters_ {
    
    export type content = string
    
}

export type Convert_To_JSON_Parameters_ = {
    readonly 'content': Convert_To_JSON_Parameters_.content
}

export namespace Seal_Parameters_ {
    
    export type content = string
    
}

export type Seal_Parameters_ = {
    readonly 'content': Seal_Parameters_.content
}

export namespace On_Completion_Parameters_ {
    
    export type content = string
    
    export type file_path = string
    
    export type position = Position_
    
    export type indent = string
    
}

export type On_Completion_Parameters_ = {
    readonly 'content': On_Completion_Parameters_.content
    readonly 'file path': On_Completion_Parameters_.file_path
    readonly 'position': On_Completion_Parameters_.position
    readonly 'indent': On_Completion_Parameters_.indent
}

export namespace On_Hover_Parameters_ {
    
    export type content = string
    
    export type file_path = string
    
    export type position = Position_
    
}

export type On_Hover_Parameters_ = {
    readonly 'content': On_Hover_Parameters_.content
    readonly 'file path': On_Hover_Parameters_.file_path
    readonly 'position': On_Hover_Parameters_.position
}

export namespace Validate_Document_Parameters_ {
    
    export type content = string
    
    export type file_path = string
    
    export type tab_size = number
    
}

export type Validate_Document_Parameters_ = {
    readonly 'content': Validate_Document_Parameters_.content
    readonly 'file path': Validate_Document_Parameters_.file_path
    readonly 'tab size': Validate_Document_Parameters_.tab_size
}

export { 
    Diagnostic_Severity_ as Diagnostic_Severity, 
    Position_ as Position, 
    Range_ as Range, 
    Diagnostic_ as Diagnostic, 
    Diagnostics_ as Diagnostics, 
    Document_Data_ as Document_Data, 
    Hover_Texts_ as Hover_Texts, 
    Optional_Hover_Texts_ as Optional_Hover_Texts, 
    On_Hover_Result_ as On_Hover_Result, 
    Completion_Items_ as Completion_Items, 
    Optional_Completion_Items_ as Optional_Completion_Items, 
    On_Completion_Result_ as On_Completion_Result, 
    On_Validate_Document_Result_ as On_Validate_Document_Result, 
    Convert_To_JSON_Parameters_ as Convert_To_JSON_Parameters, 
    Seal_Parameters_ as Seal_Parameters, 
    On_Completion_Parameters_ as On_Completion_Parameters, 
    On_Hover_Parameters_ as On_Hover_Parameters, 
    Validate_Document_Parameters_ as Validate_Document_Parameters, 
}

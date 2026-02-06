    
    import * as _pi from 'pareto-core/dist/interface'
    
    import * as i_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"
    
    import * as i_in from "./data"
    
    export namespace Diagnostic_Severity_ {
        
        export type I = i_in.Diagnostic_Severity
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type Diagnostic_Severity_ = (
        context: Diagnostic_Severity_.I,
    ) => Diagnostic_Severity_.O
    
    export namespace Position_ {
        
        export type I = i_in.Position
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type Position_ = (
        context: Position_.I,
    ) => Position_.O
    
    export namespace Range_ {
        
        export type I = i_in.Range
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type Range_ = (
        context: Range_.I,
    ) => Range_.O
    
    export namespace Diagnostic_ {
        
        export type I = i_in.Diagnostic
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type Diagnostic_ = (
        context: Diagnostic_.I,
    ) => Diagnostic_.O
    
    export namespace Diagnostics_ {
        
        export type I = i_in.Diagnostics
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type Diagnostics_ = (
        context: Diagnostics_.I,
    ) => Diagnostics_.O
    
    export namespace Document_Data_ {
        
        export type I = i_in.Document_Data
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type Document_Data_ = (
        context: Document_Data_.I,
    ) => Document_Data_.O
    
    export namespace Hover_Texts_ {
        
        export type I = i_in.Hover_Texts
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type Hover_Texts_ = (
        context: Hover_Texts_.I,
    ) => Hover_Texts_.O
    
    export namespace Optional_Hover_Texts_ {
        
        export type I = i_in.Optional_Hover_Texts
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type Optional_Hover_Texts_ = (
        context: Optional_Hover_Texts_.I,
    ) => Optional_Hover_Texts_.O
    
    export namespace On_Hover_Result_ {
        
        export type I = i_in.On_Hover_Result
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type On_Hover_Result_ = (
        context: On_Hover_Result_.I,
    ) => On_Hover_Result_.O
    
    export namespace Completion_Items_ {
        
        export type I = i_in.Completion_Items
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type Completion_Items_ = (
        context: Completion_Items_.I,
    ) => Completion_Items_.O
    
    export namespace Optional_Completion_Items_ {
        
        export type I = i_in.Optional_Completion_Items
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type Optional_Completion_Items_ = (
        context: Optional_Completion_Items_.I,
    ) => Optional_Completion_Items_.O
    
    export namespace On_Completion_Result_ {
        
        export type I = i_in.On_Completion_Result
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type On_Completion_Result_ = (
        context: On_Completion_Result_.I,
    ) => On_Completion_Result_.O
    
    export namespace On_Validate_Document_Result_ {
        
        export type I = i_in.On_Validate_Document_Result
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type On_Validate_Document_Result_ = (
        context: On_Validate_Document_Result_.I,
    ) => On_Validate_Document_Result_.O
    
    export namespace Convert_To_JSON_Parameters_ {
        
        export type I = i_in.Convert_To_JSON_Parameters
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type Convert_To_JSON_Parameters_ = (
        context: Convert_To_JSON_Parameters_.I,
    ) => Convert_To_JSON_Parameters_.O
    
    export namespace Seal_Parameters_ {
        
        export type I = i_in.Seal_Parameters
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type Seal_Parameters_ = (
        context: Seal_Parameters_.I,
    ) => Seal_Parameters_.O
    
    export namespace On_Completion_Parameters_ {
        
        export type I = i_in.On_Completion_Parameters
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type On_Completion_Parameters_ = (
        context: On_Completion_Parameters_.I,
    ) => On_Completion_Parameters_.O
    
    export namespace On_Hover_Parameters_ {
        
        export type I = i_in.On_Hover_Parameters
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type On_Hover_Parameters_ = (
        context: On_Hover_Parameters_.I,
    ) => On_Hover_Parameters_.O
    
    export namespace Validate_Document_Parameters_ {
        
        export type I = i_in.Validate_Document_Parameters
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type Validate_Document_Parameters_ = (
        context: Validate_Document_Parameters_.I,
    ) => Validate_Document_Parameters_.O
    
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

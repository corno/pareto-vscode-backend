
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/unmarshall"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Diagnostic_Severity_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Diagnostic_Severity
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Diagnostic_Severity_ = (
    context: Diagnostic_Severity_.I,
    abort: _pi.Abort<Diagnostic_Severity_.E>,
) => Diagnostic_Severity_.O

export namespace Position_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Position
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Position_ = (
    context: Position_.I,
    abort: _pi.Abort<Position_.E>,
) => Position_.O

export namespace Range_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Range
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Range_ = (
    context: Range_.I,
    abort: _pi.Abort<Range_.E>,
) => Range_.O

export namespace Diagnostic_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Diagnostic
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Diagnostic_ = (
    context: Diagnostic_.I,
    abort: _pi.Abort<Diagnostic_.E>,
) => Diagnostic_.O

export namespace Diagnostics_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Diagnostics
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Diagnostics_ = (
    context: Diagnostics_.I,
    abort: _pi.Abort<Diagnostics_.E>,
) => Diagnostics_.O

export namespace Document_Data_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Document_Data
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Document_Data_ = (
    context: Document_Data_.I,
    abort: _pi.Abort<Document_Data_.E>,
) => Document_Data_.O

export namespace Hover_Texts_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Hover_Texts
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Hover_Texts_ = (
    context: Hover_Texts_.I,
    abort: _pi.Abort<Hover_Texts_.E>,
) => Hover_Texts_.O

export namespace Optional_Hover_Texts_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Optional_Hover_Texts
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Optional_Hover_Texts_ = (
    context: Optional_Hover_Texts_.I,
    abort: _pi.Abort<Optional_Hover_Texts_.E>,
) => Optional_Hover_Texts_.O

export namespace On_Hover_Result_ {
    
    export type I = i_in.Value
    
    export type O = i_out.On_Hover_Result
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type On_Hover_Result_ = (
    context: On_Hover_Result_.I,
    abort: _pi.Abort<On_Hover_Result_.E>,
) => On_Hover_Result_.O

export namespace Completion_Items_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Completion_Items
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Completion_Items_ = (
    context: Completion_Items_.I,
    abort: _pi.Abort<Completion_Items_.E>,
) => Completion_Items_.O

export namespace Optional_Completion_Items_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Optional_Completion_Items
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Optional_Completion_Items_ = (
    context: Optional_Completion_Items_.I,
    abort: _pi.Abort<Optional_Completion_Items_.E>,
) => Optional_Completion_Items_.O

export namespace On_Completion_Result_ {
    
    export type I = i_in.Value
    
    export type O = i_out.On_Completion_Result
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type On_Completion_Result_ = (
    context: On_Completion_Result_.I,
    abort: _pi.Abort<On_Completion_Result_.E>,
) => On_Completion_Result_.O

export namespace On_Validate_Document_Result_ {
    
    export type I = i_in.Value
    
    export type O = i_out.On_Validate_Document_Result
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type On_Validate_Document_Result_ = (
    context: On_Validate_Document_Result_.I,
    abort: _pi.Abort<On_Validate_Document_Result_.E>,
) => On_Validate_Document_Result_.O

export namespace Convert_To_JSON_Parameters_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Convert_To_JSON_Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Convert_To_JSON_Parameters_ = (
    context: Convert_To_JSON_Parameters_.I,
    abort: _pi.Abort<Convert_To_JSON_Parameters_.E>,
) => Convert_To_JSON_Parameters_.O

export namespace Seal_Parameters_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Seal_Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Seal_Parameters_ = (
    context: Seal_Parameters_.I,
    abort: _pi.Abort<Seal_Parameters_.E>,
) => Seal_Parameters_.O

export namespace On_Completion_Parameters_ {
    
    export type I = i_in.Value
    
    export type O = i_out.On_Completion_Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type On_Completion_Parameters_ = (
    context: On_Completion_Parameters_.I,
    abort: _pi.Abort<On_Completion_Parameters_.E>,
) => On_Completion_Parameters_.O

export namespace On_Hover_Parameters_ {
    
    export type I = i_in.Value
    
    export type O = i_out.On_Hover_Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type On_Hover_Parameters_ = (
    context: On_Hover_Parameters_.I,
    abort: _pi.Abort<On_Hover_Parameters_.E>,
) => On_Hover_Parameters_.O

export namespace Validate_Document_Parameters_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Validate_Document_Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Validate_Document_Parameters_ = (
    context: Validate_Document_Parameters_.I,
    abort: _pi.Abort<Validate_Document_Parameters_.E>,
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

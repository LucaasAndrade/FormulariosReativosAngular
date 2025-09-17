import { JsonPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: "app-form",
    imports: [ReactiveFormsModule, JsonPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // Formularios reativos são aqueles que parte da lógica está no TS.
    template: `
    <div class="content">
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <div class='form-group'>
                <label> nome </label>
                <input type="text" id="name" formControlName="name" />
            </div>
            <div>
                <label class="form-group"> Email: </label>
                <input type="email" id="email" formControlName="email">
            </div>
            <button type="submit">Enviar</button>
        </form>
        @if (subimittedData) {
            <div class="submitted-data">
                <p> formulario enviado com sucesso </p>
                <pre> {{subimittedData | json}} </pre>
            </div>
        }
    </div>
    `,
    styles: `
        .content{

        }
        .form-group {
            margin-bottom: 16px;
        }
        .submitted-data {
            margin-top: 32px;
            background-color: #f0f0f0;
            padding: 16px;
            border-radius: 8px;
        }
    `
})

export class formComponent{
    private fb = inject(FormBuilder)
    form = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
    })
    subimittedData: any = null
    onSubmit(){
        if(this.form.valid){
            this.subimittedData = this.form.value; 
        }
    }
};
# Calculate boss resistance based on disturbance

Choose your abyss tier:
- <input type="radio" id="NV" value="NV" v-model="tier" /> <label for="NV">Nirvana</label>
- <input type="radio" id="RL" value="RL" v-model="tier" /> <label for="RL">Red Lotus</label>
- <input type="radio" id="A3" value="A3" v-model="tier" /> <label for="A3">Agony 3</label>
<input type="radio" id="A2" value="A2" v-model="tier" /> <label for="A2">Agony 2</label>
<input type="radio" id="A1" value="A1" v-model="tier" /> <label for="A1">Agony 1</label>
- <input type="radio" id="S3" value="S3" v-model="tier" /> <label for="S3">Sinful 3</label>
<input type="radio" id="S2" value="S2" v-model="tier" /> <label for="S2">Sinful 2</label>
<input type="radio" id="S1" value="S1" v-model="tier" /> <label for="S1">Sinful 1</label>
- <input type="radio" id="FB" value="FB" v-model="tier" /> <label for="FB">Forbidden</label>

Enter disturbance:
<input :class="$style.input" type="number" v-model.number="dist">

### Result
- Elemental resistance is: {{result.ele}}
- Physical resistance is: {{result.phys}} (DEF = {{result.def}})

Keep in mind, some bosses might have additional buffs to reduce damage even further!

<script setup>
    import { ref, reactive, computed } from 'vue'

    const eleRes = {
        "NV": {"m": 0.060919, "b": 30.22086},
        "RL": {"m": 0.109936, "b": 8.937896},
        "A3": {"m": 0.101057, "b": 3.568432},
        "A2": {"m": 0.081444, "b": 9.690711},
        "A1": {"m": 0.066125, "b": 14.20807},
        "S3": {"m": 0.028600, "b": 23.37935},
        "S2": {"m": 0.037357, "b": 21.55595},
        "S1": {"m": 0.030981, "b": 22.77705},
        "FB": {"m": 0.034195, "b": 22.29482},
    }

    const physRes = {
        "NV": {"m": 0.050390, "b": 46.25637},
        "RL": {"m": 0.099630, "b": 24.88687},
        "A3": {"m": 0.165772, "b": -9.60857},
        "A2": {"m": 0.140951, "b": -1.85279},
        "A1": {"m": 0.116114, "b": 5.414997},
        "S3": {"m": 0.064314, "b": 17.84434},
        "S2": {"m": 0.055164, "b": 19.39904},
        "S1": {"m": 0.073466, "b": 15.91751},
        "FB": {"m": 0.072533, "b": 16.13143},
    }

    let dist = ref(0)
    let tier = ref("RL")

    let result = computed(() => {
        let p = physRes[tier.value]
        let e = eleRes[tier.value]

        let phys = (dist.value * p.m + p.b).toFixed(5)
        let ele = (dist.value * e.m + e.b).toFixed(5)

        // 20 * (80 + 15) = 1900
        let def = ((1 / (100 - phys) * 100 - 1) * 1900).toFixed(5)

        return {phys, ele, def}
    })
</script>

<style module>
    .input {
        font-size: 1em;
        text-align:center;
        width: 50px;
        padding: 0.1rem 0.4rem;
        background-color: var(--vp-c-text-inverse-1);
        border: 1px solid var(--vp-c-border);
    }
</style>
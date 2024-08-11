import { useState } from "react";
import Button from "./Button";

export default function KalkulatorStunting() {
  const labelClass = "flex flex-col w-full text-white text-[16px] lg:text-[20px] font-semibold gap-1";
  const inputClass = "outline outline-2 outline-[#FCD05F] font-normal px-2 py-1 rounded-[8px] text-black";

  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [hemoglobin, setHemoglobin] = useState<string>("");
  const [maternalDisease, setMaternalDisease] = useState<boolean>(false);
  const [smoking, setSmoking] = useState<boolean>(false);
  const [risk, setRisk] = useState<null | number>(null);

  const calculateRisk = () => {
    if (!height || !weight || !age || !hemoglobin) {
      alert("Lengkapi data yang diperlukan!")
      setRisk(null);
      return;
    }

    let riskScore = 0;
    let totalWeight = 100; // Total weight must be 100%

    if (Number(height) < 145) {
      riskScore += 15; // 15% weight for height
    }
    if (Number(weight) / ((Number(height) / 100) * (Number(height) / 100)) < 18.5) {
      riskScore += 20; // 20% weight for BMI
    }
    if (Number(age) < 20 || Number(age) > 35) {
      riskScore += 15; // 15% weight for age
    }
    if (Number(hemoglobin) < 11) {
      riskScore += 15; // 15% weight for hemoglobin
    }
    if (maternalDisease) {
      riskScore += 15; // 15% weight for maternal disease
    }
    if (smoking) {
      riskScore += 10; // 10% weight for smoking
    }

    let normalizedRiskScore = (riskScore / totalWeight) * 100;
    setRisk(Number(normalizedRiskScore.toFixed(2)));
    console.log(Number(normalizedRiskScore.toFixed(2)));
  };

  return (
    <section className="py-20 bg-green-1">
      <div
        // data-aos="fade-up"
        className="flex flex-col items-center justify-center gap-2 lg:gap-[11px] relative z-[1]"
      >
        <h1 className="text-white text-center font-bold text-[25px] md:text-[30px]">Kalkulator Stunting</h1>

        <form
          className="w-[90%] max-w-[700px] flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            calculateRisk();
          }}
        >
          <label className={labelClass}>
            Tinggi Badan Ibu (cm)
            <input
              type="number"
              className={inputClass}
              placeholder=""
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          <label className={labelClass}>
            Berat Badan Ibu (kg)
            <input
              type="number"
              className={inputClass}
              placeholder=""
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <label className={labelClass}>
            Usia Ibu (tahun)
            <input
              type="number"
              className={inputClass}
              placeholder=""
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <label className={labelClass}>
            Kadar Hemoglobin Ibu (g/dL)
            <input
              type="number"
              className={inputClass}
              placeholder=""
              value={hemoglobin}
              onChange={(e) => setHemoglobin(e.target.value)}
            />
          </label>
          <label className={labelClass}>
            Merokok / Terpapar Asap Rokok?
            <div className="flex gap-10">
              <div className="flex gap-3 items-center">
                <button
                  type="button"
                  className={
                    "size-[15px] rounded-full outline outline-1 outline-offset-4 outline-[#FCD05F] transition " +
                    (smoking ? "bg-[#FCD05F]" : "bg-transparent")
                  }
                  onClick={() => setSmoking(true)}
                ></button>
                <span>Ya</span>
              </div>
              <div className="flex gap-3 items-center">
                <button
                  type="button"
                  className={
                    "size-[15px] rounded-full outline outline-1 outline-offset-4 outline-[#FCD05F] transition " +
                    (!smoking ? "bg-[#FCD05F]" : "bg-transparent")
                  }
                  onClick={() => setSmoking(false)}
                ></button>
                <span>Tidak</span>
              </div>
            </div>
          </label>
          <label className={labelClass}>
            Menderita Penyakit Maternal?
            <div className="flex gap-10">
              <div className="flex gap-3 items-center">
                <button
                  type="button"
                  className={
                    "size-[15px] rounded-full outline outline-1 outline-offset-4 outline-[#FCD05F] transition " +
                    (maternalDisease ? "bg-[#FCD05F]" : "bg-transparent")
                  }
                  onClick={() => setMaternalDisease(true)}
                ></button>
                <span>Ya</span>
              </div>
              <div className="flex gap-3 items-center">
                <button
                  type="button"
                  className={
                    "size-[15px] rounded-full outline outline-1 outline-offset-4 outline-[#FCD05F] transition " +
                    (!maternalDisease ? "bg-[#FCD05F]" : "bg-transparent")
                  }
                  onClick={() => setMaternalDisease(false)}
                ></button>
                <span>Tidak</span>
              </div>
            </div>
          </label>

          <Button
            type="submit"
            ariaLabel="Calculate Risk"
            className="bg-[#FCD05F] hover:bg-[#F8B60D] text-black"
          >
            Hitung
          </Button>

          {risk !== null && (
            <div className="text-white text-[25px]">
              <p className="text-center mt-3 mb-5">
                Risiko stunting anda adalah <span className="font-bold">{risk}%</span>
              </p>
              <p className="text-center">
                {risk <= 20
                  ? "Risiko stunting anda rendah, pertahankan gaya hidup yang sehat untuk mencegah stunting. Tetap jaga asupan gizi yang seimbang, lakukan cek kesehatan berkala, dan hindari merokok."
                  : risk > 20 && risk <= 40
                  ? "Risiko Anda sedang. Pertimbangkan untuk melakukan beberapa penyesuaian gaya hidup untuk mengurangi risiko Anda. Pastikan asupan gizi yang cukup, pantau kadar hemoglobin, dan dapatkan saran dari penyedia layanan kesehatan."
                  : risk > 40 && risk <= 60
                  ? "Risiko Anda tinggi. Penting untuk mengambil langkah proaktif untuk mengurangi risiko Anda. Ikuti diet kaya nutrisi, hindari merokok, kelola penyakit maternal jika ada, dan konsultasikan dengan profesional kesehatan untuk saran yang dipersonalisasi."
                  : "Risiko Anda sangat tinggi. Tindakan segera diperlukan untuk mengurangi risiko stunting. Segera cari pertolongan medis, ikuti rencana nutrisi yang ketat, dan atasi masalah kesehatan. Pemantauan dan intervensi yang teratur sangat penting."}
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

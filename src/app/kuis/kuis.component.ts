import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../share/mahasiswa';

@Component({
  selector: 'app-kuis',
  templateUrl: './kuis.component.html',
  styleUrls: ['./kuis.component.css']
})
export class KuisComponent implements OnInit {
  nim="";
  nama="";
  kelas="";
  daftarMhs:Mahasiswa[] = [];
  mhs;

  constructor() { }

  ngOnInit() {
  }
    tambahMhs(){
    this.mhs = new Mahasiswa(this.nim, this.nama, this.kelas);
    this.daftarMhs.push(this.mhs);
    this.nim='';
    this.nama='';
    this.kelas='';
    }
}
